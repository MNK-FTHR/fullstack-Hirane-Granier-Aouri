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
    className: ""
  }, props.text);
};

exports.ButtonComponent = ButtonComponent;
exports.InputTextComponent = InputTextComponent;
//# sourceMappingURL=index.js.map
