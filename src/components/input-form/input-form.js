import React, { Component } from "react";
import PropTypes from "prop-types";
import FormContainer from "./components/form-container";
import FormPlaceholder from "./components/form-placeholder";
import FormDropdown from "./components/form-dropdown";
import FormInput from "./components/form-input";
import FormError from "./components/form-error";

class InputForm extends Component {
  constructor(props) {
    super(props);

    this.state = { focused: false };
  }

  render() {
    const {
      inputType,
      options,
      containerStyle,
      textStyle,
      placeholder,
      size,
      error,
      value,
      ...others
    } = this.props;
    const { focused } = this.state;

    return (
      <FormContainer style={containerStyle} size={size} error={error}>
        {placeholder && (
          <FormPlaceholder weight={300} upper={value !== "" || (inputType !== "dropdown" && focused)}>
            {placeholder}
          </FormPlaceholder>
        )}
        {inputType === "dropdown" ? (
          <FormDropdown
            {...others}
            options={options}
            onFocus={() => this.setState({ focused: true })}
            onBlur={() => this.setState({ focused: false })}
            value={value}
          />
        ) : (
          <FormInput
            {...others}
            style={textStyle}
            onFocus={() => this.setState({ focused: true })}
            onBlur={() => this.setState({ focused: false })}
            value={value}
          />
        )}
        {error && (
          <FormError type="h5" weight={300}>
            {error}
          </FormError>
        )}
      </FormContainer>
    );
  }
}

InputForm.defaultProps = {
  inputType: undefined,
  options: [],
  containerStyle: undefined,
  textStyle: undefined,
  size: undefined,
  placeholder: undefined,
  error: undefined
};

InputForm.propTypes = {
  inputType: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({ value: PropTypes.string.isRequired })),
  // eslint-disable-next-line
  containerStyle: PropTypes.object,
  // eslint-disable-next-line
  textStyle: PropTypes.object,
  size: PropTypes.oneOf(["modal", "large"]),
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  error: PropTypes.string
};

export default InputForm;
