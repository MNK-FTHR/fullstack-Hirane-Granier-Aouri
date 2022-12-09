import React, { useState } from "react";
import style from './style.js'
const SelectComponent = (props) => {
  let customSelectedOption = "";
  let parsedCustomSelectedOption = props.nationalities.filter(nationality => nationality.value === customSelectedOption);
  const handleChange = (event)  => {
    let val = event.target.value;
    customSelectedOption = val;
  };
  return (
    <div>
        <label style={style.subText}>Nationalité</label>
        <select style={style.select} onChange={(e)=>handleChange(e)} value={parsedCustomSelectedOption.label}>
          <option defaultValue disabled>
            Sélectinnez une valeur
          </option>
          {
            props.nationalities.map((nationality) =>(
              <option value={nationality.value} key={nationality.value} >{nationality.label}</option>
            ))
          }
        </select>
    </div>
  );
};

export default SelectComponent;