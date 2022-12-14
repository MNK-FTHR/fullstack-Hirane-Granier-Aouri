import React from "react";
import style from "./style.js"
const ButtonComponent = (props) => {
  const button = {
    ...style.btn,
    ...style[props.color],
  }

  props.maxWidth ? button.width = "100%" : "";
  return (
    <button style={button} onClick={event => props.handleSubmit(event, [])}>{props.text}</button>
  );
};

export default ButtonComponent