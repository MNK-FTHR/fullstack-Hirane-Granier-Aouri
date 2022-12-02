function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var InputTextComponent = function InputTextComponent() {
  return /*#__PURE__*/React.createElement("input", {
    type: "text"
  });
};

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

var style = {
  btn: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "12px 16px",
    gap: "8px",
    width: "150px",
    right: "9px",
    border: "none"
  },
  danger: {
    background: "#C00000",
    color: "white"
  }
};

var ButtonComponent = function ButtonComponent(props) {
  var button = _extends({}, style.btn, style[props.color]);
  return /*#__PURE__*/React.createElement("button", {
    style: button
  }, props.text);
};

var styles = {"container":"_1iqhl","checkmark":"_vRuMv"};

var CheckBoxComponent = function CheckBoxComponent() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: styles.container
  }, "One", /*#__PURE__*/React.createElement("input", {
    type: "checkbox"
  }), /*#__PURE__*/React.createElement("span", {
    className: styles.checkmark
  })));
};

var RadioButtonComponent = function RadioButtonComponent() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    id: "huey",
    name: "drone",
    value: "huey",
    checked: true
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "huey"
  }, "Huey"));
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
