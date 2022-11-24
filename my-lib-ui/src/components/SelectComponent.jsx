import React from "react";

const SelectComponent = (props) => {
  return (
    <div className="my-lib-ui-form-field">
      <select className="my-lib-ui-select" {...props}>
        {props.children}
      </select>
    </div>
  );
};

export default SelectComponent;