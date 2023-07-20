import { Card } from "./Utils/Card";
import projectData from "./Utils/Arrays/project-data";
import { useState, useContext } from "react";
import { AnswerBoxContext } from "./AnswerBoxContext";
import AnswerBox from "./Utils/AnswerDialogBox";

import "./css/Projects.css";
export default function Projects() {
  const { toggleAnswerBox, answerBoxOpen } = useContext(AnswerBoxContext);
  const question =
    "A person who endures suffering, pain, or difficulty without complaining is called ______";
  const [showQuetion, setShowQuestion] = useState({
    show: false,
    question,
    count: 0,
  });
  const increaseCount = () => {
    if (answerBoxOpen.findMode) {
      if (showQuetion.count === 6) {
        setShowQuestion((prevState) => ({
          ...prevState,
          count: 0,
          show: false,
        }));
      }
      setShowQuestion((prevState) => ({
        ...prevState,
        count: prevState.count + 1,
      }));
    }
  };
  return (
    <div className="container-projects page">
      <div className="projects-text-header">Projects</div>
      <Card data={projectData} />
      <div className="projects-avatar">
        <div className="projects-hero-image" onClick={increaseCount}></div>
        <div className="white-circled-attcahmet"></div>
      </div>
      {showQuetion.count == 4 && (
        <div
          className="ovrlay-puzzle-question"
          onClick={() => toggleAnswerBox(4)}
        >
          {showQuetion.question}
          <span className="overlay-puzzle-answer">Answer</span>
        </div>
      )}
      <AnswerBox id={4} question={"Blank `?"} />
    </div>
  );
}
