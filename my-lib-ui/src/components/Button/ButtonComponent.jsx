import React from "react";
import style from "./style.js"
const ButtonComponent = (props) => {
  const button = {
    ...style.btn,
    ...style[props.color]
  }
  return (
    <button style={button}>{props.text}</button>
  );
};

export default ButtonComponent