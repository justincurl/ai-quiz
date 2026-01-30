export default function IntroPage({ onStart }) {
  return (
    <div className="intro-page">
      <p className="intro-description">
        An MBTI-inspired quiz for your beliefs about AI. Answer 15 questions to
        discover your AI worldview archetype.
      </p>
      <button className="start-button" onClick={onStart}>
        Start Quiz
      </button>
    </div>
  );
}
