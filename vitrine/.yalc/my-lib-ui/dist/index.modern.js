import React from 'react';

var colors = {
  medium: "rgba(19, 19, 21, 0.6)"
};
var style = {
  wrapper: {
    marginBottom: "1.5rem",
    position: "relative",
    width: "20.4375rem"
  },
  textInput: {
    border: "none",
    borderBottom: "0.125rem solid " + colors.medium,
    width: "100%",
    height: "2rem",
    fontSize: "1.0625rem",
    paddingLeft: "0.875rem",
    lineHeight: "147.6%",
    paddingTop: "0.825rem",
    paddingBottom: "0.5rem"
  },
  subText: {
    position: "absolute",
    top: "0.9375rem",
    left: "0.875rem",
    lineHeight: "147.6%",
    color: "" + colors.medium,
    transition: "top .2s"
  }
};

var InputTextComponent = function InputTextComponent() {
  return /*#__PURE__*/React.createElement("div", {
    style: style.wrapper
  }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("input", {
    style: style.textInput
  }), /*#__PURE__*/React.createElement("span", {
    style: style.subText
  }, "Normal")));
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

var style$1 = {
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
  var button = _extends({}, style$1.btn, style$1[props.color]);
  return /*#__PURE__*/React.createElement("button", {
    style: button
  }, props.text);
};

var CheckBoxComponent = function CheckBoxComponent() {
  return /*#__PURE__*/React.createElement("div", null);
};

var RadioButtonComponent = function RadioButtonComponent(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    id: props.text,
    name: props.text,
    value: props.text
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "huey"
  }, props.text));
};

var SelectComponent = function SelectComponent() {
  return /*#__PURE__*/React.createElement("div", null, "select");
};

export { ButtonComponent, CheckBoxComponent, InputTextComponent, RadioButtonComponent, SelectComponent };
//# sourceMappingURL=index.modern.js.map
