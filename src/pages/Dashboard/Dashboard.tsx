import "./Dashboard.css";
import { useAuth } from "../../context/Auth/auth-context";
import { useEffect } from "react";
import { useQuiz } from "../../context/Quiz/quiz-context";
import { useNavigate } from "react-router-dom";
export function Dashboard() {
  const { userInfo } = useAuth();
  const { dispatch } = useQuiz();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({ type: "RESET" });
    sessionStorage.removeItem("quizId");
  }, [dispatch]);

  return (
    <div className="dash-container">
      <div className="dash">
        <h2 className="dash-title">Progress Dashboard</h2>
        {userInfo.scores.length === 0 ? (
          <div className="dash-play-now flex-center">
            <h3>Looks like you haven't played any quiz !</h3>
            <button
              className="link-btn"
              onClick={() => {
                navigate("/");
              }}
            >
              Play Now
            </button>
          </div>
        ) : (
          <div className="score-container">
            <div className="score-header">
              <h3>Quiz Category</h3>
              <h3>Score</h3>
            </div>
            {userInfo.scores.map((progress: any) => (
              <div className="score-main">
                <div className="score-main-header">
                  <h4> {progress?.quizCategory}</h4>
                  <h4>{progress?.score}</h4>
                </div>
                <button
                  className="btn default"
                  onClick={() => {
                    sessionStorage.setItem("quizId", progress.quizId);
                    navigate("/rules");
                  }}
                >
                  Retake
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
