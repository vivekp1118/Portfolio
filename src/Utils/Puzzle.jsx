import { useContext } from "react";
import "../css/Puzzles.css";
import AnswerBox from "./AnswerDialogBox";
import { AnswerBoxContext} from "../AnswerBoxContext";

function Puzzle({id,question,t=0,r=0,b=0,l=0,isInverted=false}) 
{
  const { toggleAnswerBox } = useContext(AnswerBoxContext);
  const puzzleClick = () => toggleAnswerBox(id);
  const puzzleContainerStyle = {
      ...(t !== 0 && { top: t }),
      ...(l !== 0 && { left: l }),
      ...(b !== 0 && { bottom: b }),
      ...(r !== 0 && { right: r }),
      ...(isInverted && { transform: "rotate(90deg)" }),
  };
  return (
    <>
      <div
        className="puzzle-container"
        data-answer="true"
        id={id}
        onClick={puzzleClick}
        style={puzzleContainerStyle}
      >
        <div className="puzzle-text" data-answer="true">{question}</div>
      </div>
      <AnswerBox question={question} id={id}/>
    </>
  );
}

export default Puzzle;
