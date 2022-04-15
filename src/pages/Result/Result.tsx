import "./Result.css";

export function Result() {
  return (
    <div className="rsltcontainer flex-center">
      <h1 className="rslt-title">Quiz Result</h1>
      <div className="rslt-header-container flex-center">
        <h2 className="result-msg">Oops 😭, Better Luck Next Time !</h2>
        <div className="flex-center">
          <h3>Your Score is : </h3>
          <h3 className="score-msg">10/50</h3>
        </div>
      </div>

      <div className="rslt-que-main-container">
        <div className="rslt-que-container">
          <div className="rslt-pg-header">
            <p className="paragraph-md">Question: 1</p>
            <p className="paragraph-md">Score: 10</p>
          </div>

          <div className="rslt-pg-question">
            <h2>What was the name of the college where Rancho and Chatur studied?</h2>
          </div>

          <div className="rslt-pg-main">
            <div className="rslt-option" id="div1">
              Imperial College of Engineering
            </div>

            <div className="rslt-option" id="div2">
              Indian College of Engineering
            </div>

            <div className="rslt-option" id="div3">
              Indian Institutes of Technology
            </div>

            <div className="rslt-option" id="div4">
              Imperial Centre of Engineering
            </div>
          </div>
        </div>

        <div className="rslt-que-container">
          <div className="rslt-pg-header">
            <p className="paragraph-md">Question: 2</p>
            <p className="paragraph-md">Score: 0</p>
          </div>

          <div className="rslt-pg-question">
            <h2>What Is The Name Of Thakur's Grandson ?</h2>
          </div>

          <div className="rslt-pg-main">
            <div className="rslt-option" id="div1">
              Deepak
            </div>

            <div className="rslt-option" id="div2">
              Devrat
            </div>

            <div className="rslt-option" id="div3">
              Munna
            </div>

            <div className="rslt-option" id="div4">
              Deep
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
