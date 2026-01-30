import { useState, useCallback, useRef, useEffect } from "react";
import { initializeQuiz, recordResponse, processQuestionComplete } from "../logic/quizState";
import { generateTypeCode } from "../logic/scoring";
import { logResponse, logResult } from "../supabase";
import Question from "./Question";
import ProgressBar from "./ProgressBar";
import Results from "./Results";
import IntroPage from "./IntroPage";
import IdentityQuestion from "./IdentityQuestion";

export default function Quiz() {
  const [started, setStarted] = useState(false);
  const [isHuman, setIsHuman] = useState(null);
  const [state, setState] = useState(initializeQuiz);
  const resultLogged = useRef(false);

  const handleIdentityAnswer = useCallback((human) => {
    setIsHuman(human);
  }, []);

  const handleAnswer = useCallback((score) => {
    setState((prev) => {
      const next = JSON.parse(JSON.stringify(prev));
      const currentQ = next.questionSequence[next.currentQuestionIndex];

      // Fire-and-forget analytics
      logResponse(currentQ.id, score, isHuman);

      recordResponse(next, currentQ.id, score);
      processQuestionComplete(next);
      return next;
    });
  }, [isHuman]);

  useEffect(() => {
    if (state.isComplete && !resultLogged.current) {
      resultLogged.current = true;
      const typeCode = generateTypeCode(state.axes);
      logResult(typeCode, {
        timeline: Math.round(state.axes.timeline.normalizedScore),
        novelty: Math.round(state.axes.novelty.normalizedScore),
        outcome: Math.round(state.axes.outcome.normalizedScore),
        control: Math.round(state.axes.control.normalizedScore),
      }, isHuman);
    }
  }, [state.isComplete, state.axes, isHuman]);

  const handleRestart = useCallback(() => {
    resultLogged.current = false;
    setIsHuman(null);
    setState(initializeQuiz());
  }, []);

  if (!started) {
    return <IntroPage onStart={() => setStarted(true)} />;
  }

  if (isHuman === null) {
    return <IdentityQuestion onAnswer={handleIdentityAnswer} />;
  }

  if (state.isComplete) {
    return <Results state={state} onRestart={handleRestart} />;
  }

  const currentQuestion = state.questionSequence[state.currentQuestionIndex];

  return (
    <div className="quiz-container">
      <ProgressBar current={state.currentQuestionIndex + 1} total={15} />
      <Question
        key={currentQuestion.id}
        question={currentQuestion}
        onAnswer={handleAnswer}
      />
    </div>
  );
}
