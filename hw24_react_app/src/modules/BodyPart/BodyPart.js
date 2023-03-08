import React from "react";
import { useState } from "react";
import LeftNav from "../LeftNav/LeftNav";
import CentralPart from "../CentralPart/CentralPart";
import './BodyPart.css'

function BodyPart() {
    const [src, setSrc] = useState('');
   
    return (
    <div className='container'>
        <LeftNav callback={setSrc} />
        <CentralPart src={src}/>
    </div>
    )

}


export default BodyPart;