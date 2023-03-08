import React from "react";
import './CentralPart.css'

function CentralPart(props) {
    return (
        <div className="central-container">
            <img src={props.src} className='myImage'></img>
        </div>
    )
}

export default CentralPart;