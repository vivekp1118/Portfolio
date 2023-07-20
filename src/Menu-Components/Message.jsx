import { useState } from "react";
import { Menu } from "../Utils/Menu";
import { PageScroller } from "../Utils/PageScroller"
import { emojisArray } from "../Utils/Arrays/emojiArray";
import {getRandomNum} from "../Utils/Functions/getRandomNum"
import colorsArray from "../Utils/Arrays/colorsArray";
import "../css/Message.css"
function Message() {
    const [currentEmoji,setCurrentEmoji] = useState({bg:"white",emoji:"?"})
    const [interactionActive, setInteractionActive] = useState(window.innerWidth > 486);

    const getRandomEmoji = () =>{
        const randomNum = getRandomNum(emojisArray.length)
        const anotherRandomNum = getRandomNum(colorsArray.length);
        setCurrentEmoji({emoji:emojisArray[randomNum],...colorsArray[anotherRandomNum]})
    }
    const toggleInteraction = (event) => {
        setInteractionActive(item => !item);
    }
    return (
        <div className="page message-container">
        <div className="message-info">
            <h1 className="menu-page-header">
                Message form the Creator
            </h1>
            <h2 className="thank-you-message">
                <span className="text-saperator">
                    Hmm, Thank You.
                </span>
                <span className="text-saperator">
                    Who ever is Viewing this, I hope you have a great day! <br />
                </span>
                <span className="text-saperator">
                    Thank you for coming so far and exporing my Work It means lot to me, I hope you enjoyed it. <br />
                </span>
            </h2>
        </div>
            {interactionActive && <div 
                className="message-interaction interaction-card" 
                onClick={getRandomEmoji} 
                style={{backgroundColor:currentEmoji.bg}}
            >
                {currentEmoji.emoji}
            </div>}
            <div className="message-footer">
                Designed & Developed by Vivek Prajapati
            </div>
            <Menu />
            <PageScroller />
            <div className="interaction-activate-btn-mobile" onClick={toggleInteraction}> ? </div>

        </div>
    );
}

export default Message;