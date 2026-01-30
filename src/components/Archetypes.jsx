import { useState } from "react";
import { typeDescriptions } from "../data/typeDescriptions";

const typeKeys = Object.keys(typeDescriptions);

export default function Archetypes({ currentType }) {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(null);

  const currentUpper = currentType.toUpperCase();

  return (
    <div className="explore-section">
      <button className="explore-toggle" onClick={() => setOpen(!open)}>
        {open ? "Hide Archetypes" : "Explore All 16 Archetypes"}
      </button>

      {open && (
        <div className="archetypes-grid">
          {typeKeys.map((code) => {
            const t = typeDescriptions[code];
            const isCurrent = code === currentUpper;
            const isExpanded = expanded === code;

            return (
              <ArchetypeItem
                key={code}
                code={code}
                type={t}
                isCurrent={isCurrent}
                isExpanded={isExpanded}
                onToggle={() => setExpanded(isExpanded ? null : code)}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

function ArchetypeItem({ code, type, isCurrent, isExpanded, onToggle }) {
  return (
    <>
      <div
        className={`archetype-card${isCurrent ? " current" : ""}`}
        onClick={onToggle}
      >
        <div className="archetype-card-code">
          {code} {isCurrent && "← You"}
        </div>
        <div className="archetype-card-label">{type.label}</div>
        <div className="archetype-card-tagline">{type.tagline}</div>
      </div>

      {isExpanded && (
        <div className="archetype-detail">
          <div className="archetype-detail-header">
            <span className="archetype-detail-code">{code}</span>
            <span className="archetype-detail-label">{type.label}</span>
          </div>
          <div className="archetype-detail-tagline">{type.tagline}</div>
          <p>{type.description}</p>

          {type.thinkers.length > 0 && (
            <div className="thinkers" style={{ marginTop: "0.75rem" }}>
              <h3>Thinkers:</h3>
              <ul>
                {type.thinkers.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          )}

          {type.communities.length > 0 && (
            <div className="communities">
              <h3>Communities:</h3>
              <ul>
                {type.communities.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          )}

          <button className="archetype-detail-close" onClick={onToggle}>
            Close
          </button>
        </div>
      )}
    </>
  );
}
