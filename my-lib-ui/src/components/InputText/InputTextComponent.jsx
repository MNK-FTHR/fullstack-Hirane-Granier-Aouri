import React, { useState } from "react";
import style from "./style.js"
const InputTextComponent = (props) => {
	const [hide, setHide] = useState(true);
	console.log(props.type == "password" && hide, props);
	return (
		<div style={style.wrapper}>
			<label>
				<div style={props.type == "password" ? style.inputContainer : {width: "90%"}}>
					<input
						style={{
							...style.textInput, 
							...(props.type != "password" ? {width: "110%"}:null) 
						}}
						type={props.type == "password" ? !hide? "text" : props.type : "text"}
						/>
					{props.type == "password" && (
						hide ?
							<div style={style.revealPW}>
								<img
									onClick={()=>{setHide(false)}}
									
									src={
										"/revealPW.png"
									}
								/>
							</div>
						: 
							<div onClick={()=>{setHide(true)}}>
								<div style={style.hidePW1}>
									<img
										
										src={
											"/hidePW1.png"
										}
									/>
								</div>
								<div style={style.hidePW2}>
									<img
										
										src={
											"/hidePW2.png"
										}
									/>
								</div>
							</div>
					)}
				</div>
				<span style={style.subText}>{props.fieldName}</span>
			</label>
		</div>
	);
};

export default InputTextComponent;