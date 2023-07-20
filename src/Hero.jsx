import React from "react";
import "./css/Style.css";
import "./css/Hero.css";
import Puzzle from "./Utils/Puzzle";
import { useContext } from "react";
import { MobileContext } from "./Utils/Context";
import { AnswerBoxContext } from "./AnswerBoxContext";
import { Slide } from "./Utils/Slide";
export default function Hero(){
    const {isMobile} = useContext(MobileContext);
    const {answerBoxOpen} = useContext(AnswerBoxContext);
    return(
        <div className="hero-container">
            <div className="header typography-self">I'm Vivek Prajapati. Creative Technologist.</div>
            <div className="logo-self"></div>
            {!isMobile && <div className="logo-block"></div>}

            {isMobile && 
            <div className="Portagonist">
                 <Slide arrayItems={["Protagonist","","Portagonist",""]}/>
            </div>}
            {isMobile && <div className="Antagonist">
                 <Slide arrayItems={["Antagonist","","Antagonist",""]}
                    reverse={true}
                 />
            </div>}
            {answerBoxOpen.findMode && <Puzzle
               t={100}
               l={40}
               id={1}
               question={"9-14-6-10"}
            />}
         </div>
    )
}