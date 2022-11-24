import React from "react";

const InputComponent = (props) => {
  const { label } = props;
  return (
    <div className="my-lib-ui-form-field">
      <label className="my-lib-ui-label">{label}</label>
      <input {...props} className="my-lib-ui-input" />
    </div>
  );
};

export default InputComponent;