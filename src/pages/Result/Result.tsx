import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useQuiz } from "../../context/Quiz/quiz-context";
import { addScoreToUser } from "../../services/result-service";
import { Option, QuestionType } from "../../types/question.types";
import { quizData } from "../Question/quiz.model";
import "./Result.css";

export function Result() {
  const quizId = sessionStorage.getItem("quizId");
  const [totalScore, setTotalScore] = useState(0);
  const questionData: any = quizData.find((quizObj) => quizObj.id === quizId)?.questions;
  const {
    state: { selectedQuestions },
  } = useQuiz();

  useEffect(() => {
    if (selectedQuestions.length !== 0) {
      let total = 0;
      questionData.forEach((value: any, index: number) => {
        for (const option of questionData[index].options) {
          if (selectedQuestions[index].value === option.value && option.isRight)
            total += questionData[index].points;
        }
      });
      setTotalScore(total);
      addScoreToUser(total);
    }
  }, []);

  return selectedQuestions.length === 0 ? (
    <Navigate to="/" />
  ) : (
    <div className="rsltcontainer flex-center">
      <h1 className="rslt-title">Quiz Result</h1>
      <div className="rslt-header-container flex-center">
        {(totalScore / (questionData.length * 10)) * 100 < 80 ? (
          <h2 className="result-msg">Oops 😭, Better Luck Next Time !</h2>
        ) : (
          <h2 className="result-msg">Congratulations , You have cleared the quiz ! </h2>
        )}
        <div className="flex-center">
          <h3>Your Score is : </h3>
          <h3 className="score-msg">
            {totalScore}/{questionData.length * 10}
          </h3>
        </div>
      </div>

      <div className="rslt-que-main-container">
        {questionData.map((question: QuestionType, index: number) => (
          <div className="rslt-que-container">
            <div className="rslt-pg-header">
              <p className="paragraph-md">Question: {index + 1}</p>
              {selectedQuestions[index].value === "" && (
                <p className="paragraph-md not-selected-text">Option Not Selected</p>
              )}
            </div>

            <div className="rslt-pg-question">
              <h3>{question.question}</h3>
            </div>
            <div className="rslt-pg-main">
              {question.options.map((option: Option) => {
                return (
                  <div
                    className={`rslt-option ${option.isRight && "right-ans"} ${
                      selectedQuestions[index].value === option.value &&
                      !option.isRight &&
                      "wrong-ans"
                    }`}
                  >
                    <p>{option.value}</p>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
