import React from "react";

const RadioButtonComponent = () => {
  return (
    <div>
      <input type="radio" id="huey" name="drone" value="huey" checked />
      <label htmlFor="huey">Huey</label>
    </div>
  );
};

export default RadioButtonComponent;