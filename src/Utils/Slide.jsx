import "../css/Slide.css"

import { v4 as uuid } from 'uuid';

export function Slide({ arrayItems,reverse }) {
    const widthStyle = () => {
        const arrayLength = arrayItems.length
        if (arrayLength < 6) {
            return `calc(100vw / ${arrayLength})`
        }
        else if (arrayLength => 6 && arrayLength % 2 === 0) {
            return `calc(100vw / ${(arrayLength / 2)})`
        }
        else {
            return `calc(200vw / ${(arrayLength)})`
        }
    }
    const scrollbarElements = arrayItems.map(item=>(
        <li 
        key={uuid()} 
        className={`list-item-h ${reverse==true ? "reverse-animation" :""}`}
        style={{width:widthStyle()}}
        >
            {item}
        </li>))

    return (
        <div className="marquee-bottom">
            <ul className="marquee-content-h">
                {scrollbarElements}
                {scrollbarElements}
                {scrollbarElements}
                {scrollbarElements}
            </ul>
        </div>
    )
}
Slide.defaultProps = {
    reverse : false
}