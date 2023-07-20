import React from "react";
import { Card } from "./Utils/Card";
import "../src/css/Mini-projects.css";
import miniProjectsData from "./Utils/Arrays/mini-projects-data";
import Puzzle from "./Utils/Puzzle";
import { useContext } from "react";
import { AnswerBoxContext } from "./AnswerBoxContext";

export default function MiniProjects() {
  const { answerBoxOpen } = useContext(AnswerBoxContext);

  return (
    <div className="mini-projects page">
      <div className="white-block block-mini-project">MINI PROJECTS</div>
      <div className="mini-projects-avatar"></div>
      <Card className="mini-projects-card" data={miniProjectsData} />
      <div className="arrow-background-attachment"></div>

      {answerBoxOpen.findMode && (
        <Puzzle
          id={5}
          question={"18 5 14 1 9 19 19 1 14 3 5"}
          t={300}
          r={-150}
          isInverted={true}
        />
      )}
    </div>
  );
}
