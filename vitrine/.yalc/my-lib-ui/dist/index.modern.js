import React, { useState } from 'react';

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
  wrapper: {
    position: "relative",
    width: "100%"
  },
  inputContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 0.1fr",
    gridTemplateRows: "1fr",
    gap: "0px 0px",
    gridTemplateAreas: "\n            \"inp eye\"\n        "
  },
  textInput: {
    gridArea: "inp",
    border: "none",
    color: "red",
    borderBottom: "0.125rem solid black",
    backgroundColor: "#F9F9F9",
    width: "100%",
    height: "2rem",
    fontSize: "1rem",
    lineHeight: "147.6%",
    padding: "18px 12px 18px 16px",
    textDecoration: "none",
    outline: "none"
  },
  subText: {
    position: "absolute",
    top: "-1rem",
    left: "0.875rem",
    lineHeight: "147.6%",
    color: "rgba(19, 19, 21, 0.6)",
    transition: "top .2s"
  },
  hidePW1: {
    padding: "5px",
    position: "relative",
    zIndex: 1,
    cursor: "pointer",
    gridArea: "eye",
    backgroundColor: "#F9F9F9",
    width: "100%",
    height: "100%",
    borderBottom: "0.125rem solid black"
  },
  hidePW2: {
    padding: "5px",
    position: "absolute",
    zIndex: 2,
    marginTop: "-37px",
    cursor: "pointer",
    gridArea: "eye"
  },
  revealPW: {
    padding: "5px",
    cursor: "pointer",
    gridArea: "eye",
    width: "100%",
    height: "100%",
    backgroundColor: "#F9F9F9",
    borderBottom: "0.125rem solid black"
  }
};

var InputTextComponent = function InputTextComponent(props) {
  var _useState = useState(true),
    hide = _useState[0],
    setHide = _useState[1];
  console.log(props.type == "password" && hide, props);
  return /*#__PURE__*/React.createElement("div", {
    style: style.wrapper
  }, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("div", {
    style: props.type == "password" ? style.inputContainer : {
      width: "90%"
    }
  }, /*#__PURE__*/React.createElement("input", {
    style: _extends({}, style.textInput, props.type != "password" ? {
      width: "110%"
    } : null),
    type: props.type == "password" ? !hide ? "text" : props.type : "text"
  }), props.type == "password" && (hide ? /*#__PURE__*/React.createElement("div", {
    style: style.revealPW
  }, /*#__PURE__*/React.createElement("img", {
    onClick: function onClick() {
      setHide(false);
    },
    src: "/revealPW.png"
  })) : /*#__PURE__*/React.createElement("div", {
    onClick: function onClick() {
      setHide(true);
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: style.hidePW1
  }, /*#__PURE__*/React.createElement("img", {
    src: "/hidePW1.png"
  })), /*#__PURE__*/React.createElement("div", {
    style: style.hidePW2
  }, /*#__PURE__*/React.createElement("img", {
    src: "/hidePW2.png"
  }))))), /*#__PURE__*/React.createElement("span", {
    style: style.subText
  }, props.fieldName)));
};

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
    border: "none",
    cursor: "pointer"
  },
  danger: {
    background: "#C00000",
    color: "white"
  }
};

var ButtonComponent = function ButtonComponent(props) {
  var button = _extends({}, style$1.btn, style$1[props.color]);
  props.maxWidth ? button.width = "100%" : "";
  return /*#__PURE__*/React.createElement("button", {
    style: button,
    onClick: function onClick(event) {
      return props.handleSubmit(event, []);
    }
  }, props.text);
};

var CheckBoxComponent = function CheckBoxComponent(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("input", {
    type: "checkbox"
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

var style$2 = {
  select: {
    border: "none",
    borderBottom: "0.125rem solid black",
    backgroundColor: "#F9F9F9",
    width: "100%",
    fontSize: "1rem",
    padding: "18px 12px 18px 16px",
    color: "rgba(19, 19, 21, 0.6)"
  },
  subText: {
    top: "0.5rem",
    left: "0.875rem",
    lineHeight: "147.6%",
    zIndex: "0",
    color: "rgba(19, 19, 21, 0.6)",
    transition: "top .2s"
  }
};

var SelectComponent = function SelectComponent(props) {
  var customSelectedOption = "";
  var parsedCustomSelectedOption = props.nationalities.filter(function (nationality) {
    return nationality.value === customSelectedOption;
  });
  var handleChange = function handleChange(event) {
    var val = event.target.value;
    customSelectedOption = val;
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: style$2.subText
  }, "Nationalit\xE9"), /*#__PURE__*/React.createElement("select", {
    style: style$2.select,
    onChange: function onChange(e) {
      return handleChange(e);
    },
    value: parsedCustomSelectedOption.label
  }, /*#__PURE__*/React.createElement("option", {
    defaultValue: true,
    disabled: true
  }, "S\xE9lectinnez une valeur"), props.nationalities.map(function (nationality) {
    return /*#__PURE__*/React.createElement("option", {
      value: nationality.value,
      key: nationality.value
    }, nationality.label);
  })));
};

export { ButtonComponent, CheckBoxComponent, InputTextComponent, RadioButtonComponent, SelectComponent };
//# sourceMappingURL=index.modern.js.map
