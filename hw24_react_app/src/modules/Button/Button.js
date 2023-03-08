import React from "react";
import './Button.css';

function Button (props) {
    const handleClickButton = (event) => {
        event.preventDefault();
        props.onClick(props.data);
        
    }

    return (
        <button className="myButton" onClick={handleClickButton} data={props.data}> { props.name } </button>
    );
}

export default Button;