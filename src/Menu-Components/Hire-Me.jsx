import React from "react";
import { Menu } from "../Utils/Menu";
import { PageScroller } from "../Utils/PageScroller";
import { Slide } from "../Utils/Slide";
import colorsArray from "../Utils/Arrays/colorsArray";
import softSkills from "../Utils/Arrays/softSkills";
import { getRandomNum } from "../Utils/Functions/getRandomNum";
import "../css/HireMe.css";

function HireMe() {
    const [interactionActive, setInteractionActive] = React.useState(window.innerWidth > 486);
    const [currentCard, setCurrentCard] = React.useState({ bg: "black", fc: "white", title: "Why This Guy", desc: "?" });

    const changeCard = () => {
        const randomNum = getRandomNum(colorsArray.length);
        const anotherRandomNum = getRandomNum(softSkills.length);
        setCurrentCard({ ...colorsArray[randomNum], ...softSkills[anotherRandomNum] })
    }
    const toggleInteraction = () => {
        setInteractionActive(item => !item);
    }
    return (
        <div className="page hire-me-container">
            <div className="hire-me-info">
                <h1 className="menu-page-header">Why To Hire me ?</h1>
                <p className="hire-me-desc">
                    <span className="text-saperator">
                        I love what I do.
                    </span>
                    <span className="text-saperator">
                        My work speaks for itself.
                    </span>
                    <span className="text-saperator">
                        I research, create, and design to meet your needs and goals.
                    </span>
                </p>
                <a className="mail-me-btn" href="mailto:vivekprajapati9986@yahoo.com">We are One Click Away <i class="fa-solid fa-arrow-right-long"></i></a>
            </div>
           {interactionActive && <div
                className="hire-me-interaction interaction-card"
                onClick={changeCard}
                style={{ backgroundColor: currentCard.bg, color: currentCard.fc }}>
                <p className="interaction-title">{currentCard.title}</p>
                <p className="interaction-body">{currentCard.desc}</p>
            </div>}
            <div className="interaction-activate-btn-mobile" onClick={toggleInteraction}> ? </div>
            <div className="hire-me-slider">
                <Slide arrayItems={["An Eye For Design", "", "Continuous Learner", "", "Unmatched Imagination", "", "Unbeatable Creativity", ""]} />
            </div>
            <PageScroller />
            <Menu />
        </div>
    );
}

export default HireMe;