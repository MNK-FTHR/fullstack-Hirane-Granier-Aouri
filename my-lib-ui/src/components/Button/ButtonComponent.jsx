import React from "react";

const ButtonComponent = (props) => {
  return (
    <button className="danger">{props.text}</button>
  );
};

export default ButtonComponent;