import React from "react";
import { Scroll } from "./Utils/Scroll";
import { useContext } from "react";
import { AnswerBoxContext } from "./AnswerBoxContext";
import { MobileContext } from "./Utils/Context";
import { useState } from "react";
import AnswerBox from "./Utils/AnswerDialogBox";
import "./css/Style.css";
import "./css/Info.css";
import { Slide } from "./Utils/Slide";

export default function () {
    const {isMobile} = useContext(MobileContext);
    const { toggleAnswerBox,answerBoxOpen} = useContext(AnswerBoxContext);
    const quote = "Mordern devils are not born with horns and large teeth. Instead they are born with the ability to read and understand _________"
    const [showQuetion, setShowQuestion] = useState({ show: false, question: quote, count: 0 })
    const increaseCount = () => {
        if(answerBoxOpen.findMode){
            if (showQuetion.count === 6) {
                setShowQuestion(prevState => ({ ...prevState, count: 0, show: false }))
            }
            setShowQuestion((prevState) => ({ ...prevState, count: prevState.count + 1 }))
        }
    }
    return (
        <div className="conatainer-info page">
            <div className="info-bio">
                <div className="card col-sm-4" onClick={increaseCount}>
                    <div className="card-header ">What do i do ?</div>
                    <div className="card-body">
                        {
                            showQuetion.count != 4 && showQuetion.count !=5 ?
                                <>
                                    As a developer with a passion for creativity,
                                    I am dedicated to both the design and development aspects of a project,
                                    from start to finish.
                                    I prioritize creating unique layouts, interactions, and typography that makes the website stand out.
                                </>
                                :
                                <>
                                    {quote}
                                    <p className="answer-nevigator" onClick={() => toggleAnswerBox(2)}>Answer</p>
                                </> 
                        }
                    </div>
                </div>
            </div>
            <AnswerBox question={"blank means ?"} id={2}/>
            <div className="info-marquee-container">{
                isMobile ?
                    <Slide arrayItems={["Think", "Design", "Develop", "Create"]} />
                    :
                    <Scroll arrayItems={["Think", "Design", "Develop", "Create"]} />
            }
            </div>


        </div>
    )
}