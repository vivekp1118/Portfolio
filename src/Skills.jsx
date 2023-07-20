import React from "react";
import { Slide } from './Utils/Slide';
import data from "./Utils/Arrays/data"
import { useContext } from "react";
import { MobileContext } from "./Utils/Context";
import Puzzle from "./Utils/Puzzle";
import "../src/css/Style.css";
import "../src/css/Skills.css";
import { Scroll } from "./Utils/Scroll";
import { AnswerBoxContext } from "./AnswerBoxContext";

export default () => {
    const { answerBoxOpen } = useContext(AnswerBoxContext);

    let {isMobile} = useContext(MobileContext);
    return (
        <div className="skills-container page">
            <div className="white-block">SKILLS</div>
            {!isMobile && <div className="logo-block block-middle"></div>}
            <div className="image-container"></div>

            {answerBoxOpen.findMode && <Puzzle
                id={3}
                question={"5 - 14 - 9 - 7 - 13 - 1 - 20 - 9 - 3 "}
                t={200}
                l={0}
            />}
            {isMobile ?
                <div className="skills-scroll">
                    <Scroll arrayItems={data}
                        isSvg={true}
                    />
                </div>
                :
                <Slide arrayItems={data} />
            }

            {isMobile && <div className="skills-quote">"Bringing - Delusion - into - Reality."</div>}
        </div>
    )
}