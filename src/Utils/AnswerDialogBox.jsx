import "../css/AnswerBox.css";
import { useContext } from "react";
import { AnswerBoxContext } from "../AnswerBoxContext";
function AnswerBox({ question, id}) {
    const { answerBoxOpen, toggleAnswerBox ,handleQuizData,quizData} = useContext(AnswerBoxContext);

    return (
        <>
            {(answerBoxOpen.id === id  && answerBoxOpen.isOpened) &&
                <div className="answer-box-container" data-container="answer">
                    <div className="question-answers" data-container="answer">
                    <i class="fa-solid fa-square-xmark cross-btn" onClick={() => {toggleAnswerBox(id)}}></i>
                        <div className="question" data-container="answer">{question}</div>
                        <input
                            type="text"
                            className="answer-input"
                            id={id}
                            data-container="answer"
                            placeholder="Enter Answer"
                            name={id}
                            onChange={handleQuizData}
                            value={quizData[id]}
                        />
                    </div>
                </div>}
        </>

    );
}

export default AnswerBox;
