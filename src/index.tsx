import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./context/Auth/auth-context";
import { QuizProvider } from "./context/Quiz/quiz-context";
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <QuizProvider>
          <App />
        </QuizProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);
