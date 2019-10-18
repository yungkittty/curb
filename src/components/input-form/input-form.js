import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import FormContainer from "./components/form-container";
import FormPlaceholder from "./components/form-placeholder";
import FormDropdown from "./components/form-dropdown";
import FormInput from "./components/form-input";
import FormValueMaxLength from "./components/form-value-max-length";
import FormValueMaxLengthText from "./components/form-value-max-length-text";
import FormError from "./components/form-error";
import Icon from "../icon";

class InputForm extends Component {
  constructor(props) {
    super(props);

    this.state = { focused: false };
  }

  render() {
    const {
      theme,
      inputType,
      options,
      containerStyle,
      textStyle,
      placeholder,
      isPlaceholderStatic,
      size,
      error,
      value,
      maxLength,
      ...others
    } = this.props;
    const { focused } = this.state;
    const isFull = maxLength && value.length >= maxLength;
    return (
      <FormContainer style={containerStyle} size={size} error={error}>
        {placeholder && ((isPlaceholderStatic && value === "") || !isPlaceholderStatic) && (
          <FormPlaceholder
            weight={300}
            upper={!isPlaceholderStatic && (value !== "" || (inputType !== "dropdown" && focused))}
          >
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
            maxLength={maxLength}
          />
        )}
        {maxLength && (
          <FormValueMaxLength>
            <FormValueMaxLengthText type="h5" weight={700} isFull={isFull}>
              {isFull ? 0 : maxLength - value.length}
            </FormValueMaxLengthText>
            <Icon
              icon="font"
              color={!isFull ? theme.secondaryVariantColor : theme.errorColor}
              size="extra-extra-small"
            />
          </FormValueMaxLength>
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
  isPlaceholderStatic: false,
  maxLength: undefined,
  error: undefined
};

InputForm.propTypes = {
  theme: PropTypes.object.isRequired, // eslint-disable-line
  inputType: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({ value: PropTypes.string.isRequired })),
  containerStyle: PropTypes.object, // eslint-disable-line
  textStyle: PropTypes.object, // eslint-disable-line
  size: PropTypes.oneOf(["modal", "large"]),
  placeholder: PropTypes.string,
  isPlaceholderStatic: PropTypes.bool,
  value: PropTypes.string.isRequired,
  maxLength: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  error: PropTypes.string
};

export default withTheme(InputForm);
