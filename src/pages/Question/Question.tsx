import { Link } from "react-router-dom";
import "./Question.css";

export function Question() {
  return (
    <div className="quizcontainer flex-center">
      <div className="quiz-main-container">
        <div className="quiz-pg-header">
          <p className="paragraph-rg">Question: 1/5</p>
          <i className="fa fa-clock-o timer" aria-hidden="true">
            03:00
          </i>
        </div>

        <div className="quiz-pg-question">
          <h1 className="paragraph-lg">
            What was the name of the college where Rancho and Chatur studied?
          </h1>
        </div>

        <div className="quiz-pg-main">
          <label className="quiz-option" id="label1">
            {" "}
            Imperial College of Engineering
            <input type="radio" name="quiz" id="" value="" />
          </label>

          <label className="quiz-option" id="label2">
            {" "}
            Indian College of Engineering
            <input type="radio" name="quiz" id="" value="" />
          </label>

          <label className="quiz-option" id="label3">
            {" "}
            Indian Institutes of Technology
            <input type="radio" name="quiz" id="" value="" />
          </label>

          <label className="quiz-option" id="label3">
            {" "}
            Imperial Centre of Engineering
            <input type="radio" name="quiz" id="" value="" />
          </label>
        </div>

        <div className="quiz-pg-footer">
          <button className="btn danger">Quit</button>
          <Link to="/result">
            <button className="link-btn next-que-btn">
              Next <i className="fa fa-arrow-right" aria-hidden="true"></i>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
