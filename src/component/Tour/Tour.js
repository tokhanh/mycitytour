import React, { useState } from 'react'
import './Tour.scss'

export default function Tour(props) {
    console.log(props)
    const {id, city, img, name, info} = props.tour;
    const removeItem = props.removeItem;
    console.log(removeItem)
    
    const [showInfo, setShowInfo] = useState(false);

    function handleInfo() {
        setShowInfo(showInfo => !showInfo);
    }
    return (
        <article className="tour">
          <div className="img-container">
             <img src={img}></img>
             <span className="close-btn" onClick={()=>{removeItem(id)}}>
                 <i className="fas fa-window-close"></i>
             </span>
          </div>
          <div className="tour-info">
              <h3>{name}</h3>
              <h4>{city}</h4>
              <h5>info: <span onClick={handleInfo}><i className="fas fa-caret-square-down"></i></span></h5>
              {showInfo && <p>{info}</p>}
          </div>


        </article>
    )
}
