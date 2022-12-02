import React from "react";
import style from "./style.js"
const InputTextComponent = () => {



  return (
    <div style={style.wrapper}>
				<label>
				  <input style={style.textInput} />
				  <span style={style.subText}>Normal</span>
				</label>
		</div>
  );
};

export default InputTextComponent;