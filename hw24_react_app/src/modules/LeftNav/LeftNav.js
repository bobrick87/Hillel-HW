import React from "react";
import { useState } from "react";

import './LeftNav.css';
import Button from './../Button/Button';
import dog1 from './../../assets/dog1.jpg';
import dog2 from './../../assets/dog2.jpg';
import dog3 from './../../assets/dog3.jpg';


const LeftNav = (props) => {
    const [data, setData] = useState('');

    props.callback(data);
    
    return (
        <div className="left-nav-container">
            <Button name = 'Перший песик' data={dog1} onClick={setData} />
            <Button name = 'Другий песик' data ={dog2} onClick={setData} />
            <Button name = 'Третій песик' data ={dog3} onClick={setData} />
        </div>
    );
}

export default LeftNav;