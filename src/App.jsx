import Quiz from "./components/Quiz";
import "./styles/quiz.css";

export default function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>FUGO</h1>
        <p className="subtitle">What do you believe about AI?</p>
      </header>
      <main>
        <Quiz />
      </main>
    </div>
  );
}
