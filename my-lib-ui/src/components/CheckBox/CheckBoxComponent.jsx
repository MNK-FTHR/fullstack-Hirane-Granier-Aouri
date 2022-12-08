import React from "react";
import style from './style.css';

const CheckBoxComponent = (props) => {
  return (
    <div>
      <label>  
        <input type="checkbox" />
        <span>{props.text}</span>
      </label>
    </div>
  );
};

export default CheckBoxComponent;