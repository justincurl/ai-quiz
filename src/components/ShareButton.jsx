export default function ShareButton({ results }) {
  function generateShareText() {
    const s = results.scores;
    return `My AI beliefs: ${results.type} - "${results.description.tagline}"

Timeline: ${s.timeline > 50 ? "Fast" : "Slow"} (${Math.round(s.timeline)})
Novelty: ${s.novelty > 50 ? "Unprecedented" : "Analogous"} (${Math.round(s.novelty)})
Outcome: ${s.outcome > 50 ? "Good" : "Bad"} (${Math.round(s.outcome)})
Control: ${s.control > 50 ? "Open" : "Inevitable"} (${Math.round(s.control)})

Take the GUFO quiz!`;
  }

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(generateShareText());
      alert("Copied to clipboard!");
    } catch {
      // fallback
      const ta = document.createElement("textarea");
      ta.value = generateShareText();
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      alert("Copied to clipboard!");
    }
  }

  return (
    <button className="share-button" onClick={handleCopy}>
      Copy Results to Clipboard
    </button>
  );
}
