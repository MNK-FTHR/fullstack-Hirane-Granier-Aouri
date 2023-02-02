import React, { useState } from 'react';
import style from "./style.js";
const ButtonComponent = (props) => {
    let btnStyle
    if (props.dark) {
        btnStyle = {
            ...style.btn,
            ...style.darkButton
        }
    } else{
        btnStyle = {
            ...style.btn,
            ...style.redButton
        }
    }
    function clickAction() {
        switch (props.action) {
            case "carUpdate":
                console.log("Update Car");
                break;
            case "userUpdate":
                console.log("Update User");
                break;
            case "validateUser":
                console.log("Validate User");
                break;
            default:
                break;
        }
    }
    return(
        <button style={btnStyle} onClick={clickAction}>{props.text}</button>
    )
}

export default ButtonComponent