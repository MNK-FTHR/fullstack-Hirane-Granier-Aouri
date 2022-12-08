import React from 'react';

var style = {
  wrapper: {
    marginBottom: "1.5rem",
    position: "relative",
    width: "20.4375rem"
  },
  textInput: {
    border: "none",
    color: "red",
    borderBottom: "0.125rem solid black",
    backgroundColor: "#F9F9F9",
    width: "100%",
    height: "2rem",
    fontSize: "1rem",
    lineHeight: "147.6%",
    padding: "18px 12px 18px 16px",
    textDecoration: "none"
  },
  subText: {
    position: "absolute",
    top: "-1rem",
    left: "0.875rem",
    lineHeight: "147.6%",
    color: "rgba(19, 19, 21, 0.6)",
    transition: "top .2s"
  }
};

var InputTextComponent = function InputTextComponent(props) {
  return /*#__PURE__*/React.createElement("div", {
    style: style.wrapper
  }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("input", {
    style: style.textInput
  }), /*#__PURE__*/React.createElement("span", {
    style: style.subText
  }, props.fieldName)));
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

var style$2 = {
  chckbx: {
    width: "17px",
    height: "17px",
    outline: "2px solid #000000",
    borderRadius: "1px"
  }
};

var CheckBoxComponent = function CheckBoxComponent(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    style: style$2.chckbx
  }), /*#__PURE__*/React.createElement("span", null, props.text)));
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
