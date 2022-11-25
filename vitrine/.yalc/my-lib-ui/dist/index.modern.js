import React from 'react';

var InputTextComponent = function InputTextComponent() {
  console.log("HERE");
  return /*#__PURE__*/React.createElement("input", {
    type: "text"
  });
};

var ButtonComponent = function ButtonComponent(props) {
  return /*#__PURE__*/React.createElement("button", {
    className: ""
  }, props.text);
};

export { ButtonComponent, InputTextComponent };
//# sourceMappingURL=index.modern.js.map
