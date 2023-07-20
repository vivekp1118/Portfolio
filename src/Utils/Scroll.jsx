import { v4 as uuid } from 'uuid';
import "../css/Scroll.css"

export function Scroll({arrayItems,isSvg}) {
    const hightStyle = () => {
        const arrayLength = arrayItems.length
        if(arrayLength < 5){
            return `calc(100vh / ${arrayLength})`
        }
        else if( arrayLength > 5 && arrayLength % 2 === 0){
            return `calc(100vh / ${(arrayLength/2)})`
        }
        else{
            return `calc(200vh / ${(arrayLength)})`
        }
    }
    const scrollbarElements = arrayItems.map(item => (
        <li key={uuid()} className={`list-items ${isSvg ? "padded-svgs" :""}`}  style={{height: hightStyle()}}>
            {isSvg ? item : item ? item + "." :""} 
        </li>)
    )
    return (
        <div className={`marquee-parent ${isSvg ? "scroller-no-padding" : ""} `}>
            <ul className={`marquee-content ${isSvg ? "centered-svgs" : ""}`}>
                {scrollbarElements}
                {scrollbarElements}
                {scrollbarElements}
            </ul>
        </div>
    )
}
Scroll.defaultProps = {
    isSvg : false,
}
