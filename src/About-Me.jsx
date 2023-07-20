import "../src/css/About.css";
import { Scroll } from "./Utils/Scroll";
import { useState, useContext } from "react";
import { AnswerBoxContext } from "./AnswerBoxContext";
import AnswerBox from "./Utils/AnswerDialogBox";

function AboutMe() {
    const { toggleAnswerBox, answerBoxOpen } = useContext(AnswerBoxContext);

    const question = `Which of follwoing is not associated with  me:
    Empthatic ,Analytical ,Introverted ,Spontaneous`;
    const [showQuetion, setShowQuestion] = useState({
        show: false,
        question,
        count: 0,
    });
    const increaseCount = () => {
        if (answerBoxOpen.findMode) {
            if (showQuetion.count === 6) {
                setShowQuestion((prevState) => ({ ...prevState, count: 0, show: false }));
            }
            setShowQuestion((prevState) => ({
                ...prevState,
                count: prevState.count + 1,
            }));
        }
    };
    return (
        <div className="aboutMe-conatiner page">
            <div className="white-block">ABOUT ME</div>
            <div className="about-me-avater"></div>

            <div className="about-marquee">
                <Scroll
                    arrayItems={[
                        "Introspective",
                        "",
                        "Perfectionist",
                        "",
                        "Impartial",
                        "",
                    ]}
                />
            </div>

            <div className="about-info-container" onClick={increaseCount}>
                <div className="about-me-info">
                    {showQuetion.count != 4 && showQuetion.count != 5 ? (
                        <>
                            "I am the kind of person who always strives for perfection. Every
                            detail of my work matters to me, and I put in my best effort to
                            make it as close to perfection as possible."
                        </>
                    ) : (
                        <>
                            {question}
                            <p
                                className="answer-nevigator"
                                onClick={() => toggleAnswerBox(6)}
                            >
                                Answer
                            </p>
                        </>
                    )}
                </div>
            </div>
            <AnswerBox id={6} question={"Choose one"} />
        </div>
    );
}

export default AboutMe;
