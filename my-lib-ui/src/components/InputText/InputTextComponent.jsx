import React, { useState } from "react";
import style from "./style.js"
const InputTextComponent = (props) => {

  return (
    <div style={style.wrapper}>
		<label>
			<input
			 	style={style.textInput} 
			 />
			<span style={style.subText}>{props.fieldName}</span>
		</label>
	</div>
  );
};

export default InputTextComponent;