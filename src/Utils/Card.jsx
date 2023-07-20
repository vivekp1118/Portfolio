import React from "react"
import "../css/Card.css"
export function Card({data,type}){
    const [currentProject,setCurrentProject] = React.useState(data[6])  

    function projectSwitch(currentProject,direction){
        const index = data.indexOf(currentProject)
        const maxIndex = data.length
        const minIndex = 0;
        if(direction==="next"){
            const newIndex = index === maxIndex -1  ? 0 : index + 1 
            setCurrentProject(data[newIndex])
        }
        else if(direction==="previous"){
            const newIndex = index === minIndex ? maxIndex - 1  : index - 1 
            setCurrentProject(data[newIndex])
        }
    }

    
    return(
        <div className="cards-preview">
        <div className="cards-dialog-box card">
          <div className="card-preview-button-right" onClick={() => projectSwitch(currentProject,"next")}>
            <i className="fa-solid fa-chevron-right"></i>
          </div>
          <div className="card-preview-button-left" onClick={()=>projectSwitch(currentProject,"previous")}>
            <i className="fa-solid fa-chevron-left"></i>
          </div>
          <div className="card-preview card-body">
            <div className="card-display-box" style={{"background":`url('${currentProject.image}') no-repeat center center / cover`}}>
              <div className="card-information">
              <div className="card-name">{currentProject.name}</div>
              {/* {currentProject.desc && <div className="card-descreption">{currentProject.desc}</div>} */}
              </div>
            </div>
          </div>
          <div className="card-links card-footer h-90">
            {currentProject.url && <span className="github-icon-card"><i class="fa-brands fa-github"></i> <a href={currentProject.url} target="blank" className="footer-icon-text">Github</a></span>}
            {currentProject.liveUrl && <span><i class="fa-solid fa-earth-asia"></i> <a href={currentProject.liveUrl} target="blank" className="footer-icon-text">Live</a></span>}
            {currentProject.codepen && <span><i class="fa-brands fa-codepen"></i> <a href={currentProject.codepen} target="blank" className="footer-icon-text">Codepen</a></span>}
          </div>
        </div>
      </div>
    )
}
Card.defaultProps = {
    type:"project"
}