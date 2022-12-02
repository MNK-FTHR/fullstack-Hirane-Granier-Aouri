import React from "react";

const RadioButtonComponent = (props) => {
  return (
    <div>
      <input type="radio" id={props.text} name={props.text} value={props.text} />
      <label htmlFor="huey">{props.text}</label>
    </div>
  );
};

export default RadioButtonComponent;