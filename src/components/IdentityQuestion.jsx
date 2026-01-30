import { useState } from "react";

export default function IdentityQuestion({ onAnswer }) {
  const [selected, setSelected] = useState(null);

  function handleClick(value) {
    setSelected(value);
    setTimeout(() => onAnswer(value), 250);
  }

  return (
    <div className="quiz-container">
      <div className="question" style={{ textAlign: "center" }}>
        <p className="question-text">Before we begin — are you a human or an AI?</p>
        <div className="options">
          <button
            className={`option-button${selected === true ? " selected" : ""}`}
            onClick={() => handleClick(true)}
          >
            I'm a human
          </button>
          <button
            className={`option-button${selected === false ? " selected" : ""}`}
            onClick={() => handleClick(false)}
          >
            I'm an AI
          </button>
        </div>
      </div>
    </div>
  );
}
