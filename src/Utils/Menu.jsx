import "../css/Menu.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AnswerBoxContext } from "../AnswerBoxContext";

function Menu() {
    const { answerBoxOpen, toggleFindMode } = useContext(AnswerBoxContext);
    return (
        <div className="menu-container">
            <div className="menu-navigation-items">
                <ul className="menu-navigation-list">
                    <li className="menu-list-item"><Link to={"/Hire-me"}>Hire Me</Link></li>
                    <li className="menu-list-item"><Link to={"/Miscellaneous"}>Miscellaneous</Link></li>
                    <li className="menu-list-item"><Link to={"/Message"}> Message</Link></li>
                    <li className="menu-list-item" 
                        onClick={toggleFindMode}
                        style={{background: answerBoxOpen.findMode ? "rgba(255, 255, 255, 0.3)" : ""}}
                    >
                        Find Mode
                    </li>
                    <li className="menu-list-item">
                    <Link to={"/"}>
                            Home Page
                    </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export { Menu };