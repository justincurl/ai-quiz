import { useState, useEffect } from "react";
import { fetchResponses, fetchResults } from "../supabase";
import { allQuestions } from "../data/questions";

const AXES = [
  { key: "timeline", labelA: "Fast", labelB: "Slow", letter: ["F", "S"] },
  { key: "novelty", labelA: "Unprecedented", labelB: "Analogous", letter: ["U", "A"] },
  { key: "outcome", labelA: "Good", labelB: "Bad", letter: ["G", "B"] },
  { key: "control", labelA: "Open", labelB: "Inevitable", letter: ["O", "I"] },
];

export default function Dashboard() {
  const [responses, setResponses] = useState(null);
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    Promise.all([fetchResponses(), fetchResults()])
      .then(([r, res]) => {
        setResponses(r);
        setResults(res);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="dashboard"><p className="dash-loading">Loading stats…</p></div>;
  }

  if (error) {
    return <div className="dashboard"><p className="dash-loading">Error: {error}</p></div>;
  }

  if (!responses.length && !results.length) {
    return <div className="dashboard"><p className="dash-loading">No data yet.</p></div>;
  }

  // --- Question stats ---
  const questionMap = {};
  for (const q of allQuestions) {
    questionMap[q.id] = { ...q, scores: [] };
  }
  for (const r of responses) {
    if (questionMap[r.question_id]) {
      questionMap[r.question_id].scores.push(r.score);
    }
  }

  // --- Overall stats ---
  const totalCompletions = results.length;
  const typeCounts = {};
  for (const r of results) {
    typeCounts[r.type_code] = (typeCounts[r.type_code] || 0) + 1;
  }
  const sortedTypes = Object.entries(typeCounts).sort((a, b) => b[1] - a[1]);
  const maxTypeCount = sortedTypes.length ? sortedTypes[0][1] : 1;

  const axisAverages = {};
  for (const ax of AXES) {
    const vals = results
      .map((r) => r.scores?.[ax.key])
      .filter((v) => v != null);
    axisAverages[ax.key] = vals.length
      ? Math.round(vals.reduce((s, v) => s + v, 0) / vals.length)
      : 50;
  }

  // Score distribution buckets: -2, -1, 0, 1, 2
  function distribution(scores) {
    const buckets = { "-2": 0, "-1": 0, "0": 0, "1": 0, "2": 0 };
    for (const s of scores) buckets[String(s)] = (buckets[String(s)] || 0) + 1;
    return buckets;
  }

  return (
    <div className="dashboard">
      {/* Overall */}
      <section className="dash-section">
        <h2 className="dash-heading">Overall Stats</h2>
        <p className="dash-meta">{totalCompletions} quiz completions</p>

        <h3 className="dash-subheading">Type Distribution</h3>
        <div className="dash-bars">
          {sortedTypes.map(([code, count]) => (
            <div key={code} className="dash-bar-row">
              <span className="dash-bar-label">{code}</span>
              <div className="dash-bar-track">
                <div
                  className="dash-bar-fill"
                  style={{ width: `${(count / maxTypeCount) * 100}%` }}
                />
              </div>
              <span className="dash-bar-value">{count}</span>
            </div>
          ))}
        </div>

        <h3 className="dash-subheading">Average Axis Scores</h3>
        <div className="dash-axes">
          {AXES.map((ax) => (
            <div key={ax.key} className="dash-axis-row">
              <span className="dash-axis-label">{ax.labelA}</span>
              <div className="dash-axis-track">
                <div
                  className="dash-axis-marker"
                  style={{ left: `${axisAverages[ax.key]}%` }}
                />
              </div>
              <span className="dash-axis-label">{ax.labelB}</span>
              <span className="dash-axis-val">{axisAverages[ax.key]}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Per-question */}
      <section className="dash-section">
        <h2 className="dash-heading">Per-Question Stats</h2>
        <div className="dash-questions">
          {allQuestions.map((q) => {
            const data = questionMap[q.id];
            if (!data.scores.length) return null;
            const avg = (data.scores.reduce((s, v) => s + v, 0) / data.scores.length).toFixed(2);
            const dist = distribution(data.scores);
            const maxBucket = Math.max(...Object.values(dist), 1);
            return (
              <div key={q.id} className="dash-q-card">
                <div className="dash-q-header">
                  <span className="dash-q-id">{q.id}</span>
                  <span className="dash-q-axis">{q.axis}</span>
                </div>
                <p className="dash-q-text">{q.text}</p>
                <div className="dash-q-meta">
                  <span>{data.scores.length} responses</span>
                  <span>avg: {avg}</span>
                </div>
                <div className="dash-dist">
                  {["-2", "-1", "0", "1", "2"].map((b) => (
                    <div key={b} className="dash-dist-col">
                      <div
                        className="dash-dist-bar"
                        style={{ height: `${(dist[b] / maxBucket) * 100}%` }}
                      />
                      <span className="dash-dist-label">{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
