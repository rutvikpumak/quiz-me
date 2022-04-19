import { NavLink } from "react-router-dom";
import "./Home.css";

export function Home() {
  return (
    <>
      <div className="quiz-home-container">
        <div className="main-header">
          <div className="home-text">
            <h1>Bored ?</h1>
            <h1>Want to have some fun ?</h1>
            <h1>Do you think you are bollywood movie fan ?</h1>

            <a href="#explore" className="link-btn">
              Explore Quiz
            </a>
          </div>
          <div>
            <img
              className="home-img"
              src="https://res.cloudinary.com/depmzczni/image/upload/v1649998229/quiz_rrrtco.png"
              alt="Bulb"
            />
          </div>
        </div>

        <div className="category-home-container flex-center">
          <div className="category">
            <header className="category-header">Category</header>

            <main className="category-main" id="explore">
              <div className="card text-overlay">
                <div className="img-content">
                  <img
                    className="card-img"
                    src="https://stat2.bollywoodhungama.in/wp-content/uploads/2020/12/Are-you-Chatur-Enough-To-Pass-This-Ultimate-3-idiots-Quiz.jpg"
                    alt="3 idiots"
                  />
                </div>
                <div className="card-info">
                  <h3>Are you Chathur enough to pass '3 idiots' quiz ?</h3>
                  <p className="paragraph-sm">
                    <i className="fa fa-tag" aria-hidden="true"></i>
                    Take this quiz to test yourself.
                  </p>
                  <p className="paragraph-sm">
                    <i className="fa fa-tag" aria-hidden="true"></i>5 Questions
                  </p>
                  <NavLink to="/rules">
                    <div className="link-btn take-quiz-btn">Play Now</div>
                  </NavLink>
                </div>
              </div>

              <div className="card text-overlay">
                <div className="img-content">
                  <img
                    className="card-img"
                    src="https://im.idiva.com/content/2020/Jul/Toughest-Sholay-Quiz-For-All-Jai-Veeru-And-Gabbar-Fans_THUMB_5f06b1f0759e9.jpg"
                    alt=""
                  />
                </div>
                <div className="card-info">
                  <h3>Are you Jai-Veeru And Gabbar Fans ?</h3>
                  <p className="paragraph-sm">
                    <i className="fa fa-tag" aria-hidden="true"></i>
                    Take this quiz to test yourself.
                  </p>
                  <p className="paragraph-sm">
                    <i className="fa fa-tag" aria-hidden="true"></i>5 Questions
                  </p>
                  <NavLink to="/rules">
                    <div className="link-btn take-quiz-btn">Play Now</div>
                  </NavLink>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
      <div className="footer flex-center">
        <h5>
          Made with <i className="fa fa-heart" aria-hidden="true"></i> by Rutvik Umak{" "}
        </h5>
        <div className="icon-bar">
          <a
            href="https://github.com/rutvikpumak"
            target="_blank"
            className="github-logo"
            rel="noreferrer"
          >
            <i className="fa fa-github "></i>
          </a>
          <a
            href="https://twitter.com/rutvikumak13"
            target="_blank"
            className="twitter"
            rel="noreferrer"
          >
            <i className="fa fa-twitter "></i>
          </a>
          <a
            href="https://linkedin.com/in/rutvikumak"
            target="_blank"
            className="linkedin"
            rel="noreferrer"
          >
            <i className="fa fa-linkedin "></i>
          </a>
        </div>
        <p className="paragraph-sm">© 2022</p>
      </div>
    </>
  );
}
