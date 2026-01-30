export default function AxisBar({ label, score, leftLabel, rightLabel, axis }) {
  const leansRight = score > 50;
  const leansLeft = score < 50;

  return (
    <div className="axis-bar" data-axis={axis}>
      <div className="axis-title">{label}</div>
      <div className="axis-poles">
        <span className={`pole-label${leansLeft ? " active" : ""}`}>
          {leftLabel}
        </span>
        <span className={`pole-label${leansRight ? " active" : ""}`}>
          {rightLabel}
        </span>
      </div>
      <div className="bar-container">
        <div className="bar-track">
          <div className="bar-center" />
          <div className="bar-marker" style={{ left: `${score}%` }} />
        </div>
      </div>
      <div className="score-value">{Math.round(score)}</div>
    </div>
  );
}
