import { typeDescriptions } from "../data/typeDescriptions";
import { generateTypeCode } from "../logic/scoring";
import AxisBar from "./AxisBar";
import ShareButton from "./ShareButton";
import Archetypes from "./Archetypes";

function getDescription(axes) {
  const code = generateTypeCode(axes);

  // Map the type code to a description key by uppercasing each letter
  // to match the nearest archetype in the direction the user leans.
  // e.g. "FuBo" → "FUBO", "fUbi" → "FUBI"
  const descKey = code.toUpperCase();

  if (typeDescriptions[descKey]) {
    return typeDescriptions[descKey];
  }

  // Fallback for any combination not in the descriptions map
  const parts = [];
  if (axes.timeline.confidence < 0.3)
    parts.push("You're genuinely uncertain about AI timelines.");
  if (axes.novelty.confidence < 0.3)
    parts.push("You see AI as both novel and familiar in different ways.");
  if (axes.outcome.confidence < 0.3)
    parts.push(
      "You hold real uncertainty about whether AI will be net positive or negative."
    );
  if (axes.control.confidence < 0.3)
    parts.push("You're unsure how much we can steer AI's trajectory.");

  return {
    label: "The Uncertain",
    tagline: "You have mixed or uncertain views",
    description:
      parts.join(" ") ||
      "Your views don't fit neatly into common categories.",
    thinkers: [],
    communities: [],
  };
}

export default function Results({ state, onRestart }) {
  const axes = state.axes;
  const type = generateTypeCode(axes);
  const desc = getDescription(axes);

  const scores = {
    timeline: axes.timeline.normalizedScore,
    novelty: axes.novelty.normalizedScore,
    outcome: axes.outcome.normalizedScore,
    control: axes.control.normalizedScore,
  };

  const results = { type, scores, description: desc };

  return (
    <div className="results">
      <h1 className="type-code">{type}</h1>
      <h2 className="type-label">{desc.label}</h2>
      <p className="type-tagline">{desc.tagline}</p>

      <div className="axis-scores">
        <AxisBar
          label="Timeline"
          score={scores.timeline}
          leftLabel="Slow"
          rightLabel="Fast"
          axis="timeline"
        />
        <AxisBar
          label="Novelty"
          score={scores.novelty}
          leftLabel="Analogous"
          rightLabel="Unprecedented"
          axis="novelty"
        />
        <AxisBar
          label="Outcome"
          score={scores.outcome}
          leftLabel="Bad"
          rightLabel="Good"
          axis="outcome"
        />
        <AxisBar
          label="Control"
          score={scores.control}
          leftLabel="Inevitable"
          rightLabel="Open"
          axis="control"
        />
      </div>

      <div className="description">
        <p>{desc.description}</p>
      </div>

      {desc.thinkers.length > 0 && (
        <div className="thinkers">
          <h3>You might resonate with:</h3>
          <ul>
            {desc.thinkers.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      )}

      {desc.communities.length > 0 && (
        <div className="communities">
          <h3>Communities:</h3>
          <ul>
            {desc.communities.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="results-actions">
        <ShareButton results={results} />
        <button className="restart-button" onClick={onRestart}>
          Take Again
        </button>
      </div>

      <Archetypes currentType={type} />
    </div>
  );
}
