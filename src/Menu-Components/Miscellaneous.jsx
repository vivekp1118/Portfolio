import "../css/Miscellaneous.css";
import { Menu } from "../Utils/Menu";
import { PageScroller } from "../Utils/PageScroller";
import quotesArray from "../Utils/Arrays/quotesArray";
import { useState } from "react";
import { checkAns } from "../Utils/Functions/checkAns";
import { getRandomNum } from "../Utils/Functions/getRandomNum";

function Miscellaneous() {
  const localData = localStorage.getItem("localQuizData");
  let localQuizArray = [];
  if (localData) {
    localQuizArray = JSON.parse(localData);
  }
  const answeredQuiz = Object.keys(localQuizArray).filter(
    (key) => localQuizArray[key] !== ""
  ).length;

  const [pageMode, setPageMode] = useState("quotes");
  const [currentQuote, setCurrentQuote] = useState(getRandomQuote());
  const [quizData, setQuizData] = useState(localQuizArray || []);
  const [quizAnswers, setQuizAnswers] = useState({
    answered: answeredQuiz,
    correct: 0,
    total: 7,
  });

  function checkAnswers(e) {
    const quizDataLen = Object.keys(quizData).length;
    if (quizDataLen) {
      const correctAnswers = checkAns(quizData);
      setQuizAnswers((prev) => ({ ...prev, correct: correctAnswers }));
    }
  }
  const styleObj = {
    backgroundColor: "#f5f5f5",
    color: "#000000",
  };

  function getRandomQuote() {
    const randomNum = getRandomNum(quotesArray.length);
    const randomQuote = quotesArray[randomNum];
    const quoteArr = randomQuote.quote.split("* ");
    const newQuote = quoteArr.map((word) => (
      <>
        {word} <div className="text-saperator " />
      </>
    ));
    return { ...randomQuote, quote: newQuote };
  }

  function changeQuote() {
    setCurrentQuote(getRandomQuote());
  }
  return (
    <div className="page miscellaneous-container">
      <div className="miscellaneous-navigation">
        <ul className="miscellaneous-navigation-list">
          <li
            className="miscellaneous-navigation-list-items"
            onClick={() => setPageMode("quotes")}
            style={pageMode == "quotes" ? styleObj : {}}
          >
            Quotes
          </li>
         
          <li
            className="miscellaneous-navigation-list-items"
            onClick={() => setPageMode("score")}
            style={pageMode == "score" ? styleObj : {}}
          >
            Score
          </li>
          <li
            className="miscellaneous-navigation-list-items"
            onClick={() => setPageMode("notice")}
            style={pageMode == "notice" ? styleObj : {}}
          >
            Notice
          </li>
        </ul>
      </div>

      {pageMode == "quotes" && (
        <div className="quotes-container">
          <div className="quotes-display">
            <div className="quotes">{currentQuote.quote}</div>
            <div className="quotes-author">- {currentQuote.author}</div>
            <div className="quote-change" onClick={changeQuote}>
              <i class="fa-solid fa-shuffle"></i>
            </div>
          </div>
        </div>
      )}

      {pageMode == "score" && (
        <div className="score-container">
          <div className="total-puzzle-found">
            <div className="found-puzzle-number">{answeredQuiz}/7</div>
            <div className="found-puzzle-info">Puzzle Found</div>
          </div>
          <div className="puzzle-score">
            <div className="total-puzzle-score"></div>
            <div className="score-in-words">
              {quizData.length === 0 ? (
                <>You have not attempted the quiz yet</>
              ) : (
                <>You have {quizAnswers.correct} corrct answer out of 7</>
              )}
            </div>
          </div>
          <button className="check-answer-button" onClick={checkAnswers}>
            Check Answers
          </button>
        </div>
      )}
      {pageMode == "notice" && (
        <div className="notice-container">

            <ul  className="notice-list">
              <li>There are various puzzles hidden on the page.</li>
              <li>
                In order to find a puzzle, you will have to activate find mode.
                Once you activate it, you are ready to find puzzles.
              </li>
              <li>
                Find mode can be activated from the menu by clicking on it.
                Clicking on it again will disable it, making the website normal.
              </li>
              <li>Disabling find mode will make the website look normal.</li>
              <li>
                Clicking on a puzzle will open a dialog box in which you have to
                give an answer to that question.
              </li>
              <li>
                Don't worry about saving the answer; your answer will be
                persistent.
              </li>
              <li>
                If you click again on a puzzle, it will disappear, making the
                website look normal again.
              </li>
              <li>
                Once you think you have found all the answers, you can go to the
                score section of the miscellaneous page to check the answers.
              </li>
            </ul>

        </div>
      )}

      <h1 className="header ">Miscellaneous </h1>
      <PageScroller />
      <Menu />
    </div>
  );
}

export default Miscellaneous;
