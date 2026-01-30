import { useState } from "react";

export default function Question({ question, onAnswer }) {
  const [selected, setSelected] = useState(null);

  const options = [
    { score: 2, label: question.optionA },
    { score: 1, label: question.optionLeanA },
    { score: 0, label: question.optionNeutral },
    { score: -1, label: question.optionLeanB },
    { score: -2, label: question.optionB },
  ];

  function handleClick(score) {
    setSelected(score);
    setTimeout(() => {
      onAnswer(score);
      setSelected(null);
    }, 250);
  }

  return (
    <div className="question">
      <h2 className="question-text">{question.text}</h2>
      <div className="options">
        {options.map((opt, i) => (
          <button
            key={i}
            className={`option-button${selected === opt.score ? " selected" : ""}`}
            onClick={() => handleClick(opt.score)}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}
