function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

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
  return /*#__PURE__*/React__default.createElement("div", {
    style: style.wrapper
  }, /*#__PURE__*/React__default.createElement("label", null, /*#__PURE__*/React__default.createElement("input", {
    style: style.textInput
  }), /*#__PURE__*/React__default.createElement("span", {
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
  return /*#__PURE__*/React__default.createElement("button", {
    style: button
  }, props.text);
};

var CheckBoxComponent = function CheckBoxComponent(props) {
  return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("label", null, /*#__PURE__*/React__default.createElement("input", {
    type: "checkbox"
  }), /*#__PURE__*/React__default.createElement("span", null, props.text)));
};

var RadioButtonComponent = function RadioButtonComponent(props) {
  return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("input", {
    type: "radio",
    id: props.text,
    name: props.text,
    value: props.text
  }), /*#__PURE__*/React__default.createElement("label", {
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
    top: "0.875rem",
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
  return /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("label", {
    style: style$2.subText
  }, "Nationalit\xE9"), /*#__PURE__*/React__default.createElement("select", {
    style: style$2.select,
    onChange: function onChange(e) {
      return handleChange(e);
    },
    value: parsedCustomSelectedOption.label
  }, /*#__PURE__*/React__default.createElement("option", {
    defaultValue: true,
    disabled: true
  }, "S\xE9lectinnez une valeur"), props.nationalities.map(function (nationality) {
    return /*#__PURE__*/React__default.createElement("option", {
      value: nationality.value,
      key: nationality.value
    }, nationality.label);
  })));
};

exports.ButtonComponent = ButtonComponent;
exports.CheckBoxComponent = CheckBoxComponent;
exports.InputTextComponent = InputTextComponent;
exports.RadioButtonComponent = RadioButtonComponent;
exports.SelectComponent = SelectComponent;
//# sourceMappingURL=index.js.map
