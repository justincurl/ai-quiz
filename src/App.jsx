import Quiz from "./components/Quiz";
import Dashboard from "./components/Dashboard";
import "./styles/quiz.css";

const isDashboard = window.location.pathname.replace(/\/+$/, "").endsWith("/dashboard");

export default function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>FUGO</h1>
        <p className="subtitle">What do you believe about AI?</p>
      </header>
      <main>
        {isDashboard ? <Dashboard /> : <Quiz />}
      </main>
    </div>
  );
}
