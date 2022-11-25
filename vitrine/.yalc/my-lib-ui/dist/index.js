function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var InputTextComponent = function InputTextComponent() {
  console.log("HERE");
  return /*#__PURE__*/React.createElement("input", {
    type: "text"
  });
};

var ButtonComponent = function ButtonComponent(props) {
  return /*#__PURE__*/React.createElement("button", {
    className: "danger"
  }, props.text);
};

var CheckBoxComponent = function CheckBoxComponent() {
  return /*#__PURE__*/React.createElement("div", null, "checkbox");
};

var RadioButtonComponent = function RadioButtonComponent() {
  return /*#__PURE__*/React.createElement("div", null, "radiobutton");
};

var SelectComponent = function SelectComponent() {
  return /*#__PURE__*/React.createElement("div", null, "select");
};

exports.ButtonComponent = ButtonComponent;
exports.CheckBoxComponent = CheckBoxComponent;
exports.InputTextComponent = InputTextComponent;
exports.RadioButtonComponent = RadioButtonComponent;
exports.SelectComponent = SelectComponent;
//# sourceMappingURL=index.js.map
