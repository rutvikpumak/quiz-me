import { Link } from "react-router-dom";
import "./Rule.css";

export function Rule() {
  return (
    <div className="rule-container flex-center">
      <div className="rule-main-container flex-center">
        <div className="rule-header">
          <h1>Rules</h1>
        </div>
        <div className="rule-main">
          <p>
            <i className="fa fa-star" aria-hidden="true"></i> Each right answer scores 10 Points.
          </p>
          <p>
            <i className="fa fa-star" aria-hidden="true"></i> Each multiple choice question has only
            one correct answer.
          </p>
          <p>
            <i className="fa fa-star" aria-hidden="true"></i> To win the quiz you need to score more
            than 80%.
          </p>
        </div>
        <div className="flex-center">
          <Link to="/question">
            <button className="link-btn start-quiz-btn">Start Quiz</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
