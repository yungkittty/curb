import React, { Component } from "react";
import PropTypes from "prop-types";
import FormContainer from "./components/form-container";
import FormPlaceholder from "./components/form-placeholder";
import FormInput from "./components/form-input";
import FormError from "./components/form-error";
import Text from "../text";

class InputForm extends Component {
  constructor(props) {
    super(props);

    this.state = { focused: false };
  }

  render() {
    const { containerStyle, textStyle, placeholder, readOnly, size, error, value, ...others } = this.props;
    const { focused } = this.state;

    return (
      <FormContainer style={containerStyle} size={size} readOnly={readOnly}>
        {readOnly ? (
          <Text style={textStyle}>{value}</Text>
        ) : (
          <React.Fragment>
            {placeholder && (
              <FormPlaceholder weight={300} upper={value !== "" || focused}>
                {placeholder}
              </FormPlaceholder>
            )}
            <FormInput
              onFocus={() => this.setState({ focused: true })}
              onBlur={() => this.setState({ focused: false })}
              style={textStyle}
              value={value}
              error={error}
              {...others}
            />
          </React.Fragment>
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
  containerStyle: undefined,
  textStyle: undefined,
  readOnly: false,
  size: undefined,
  placeholder: undefined,
  error: undefined
};

InputForm.propTypes = {
  // eslint-disable-next-line
  containerStyle: PropTypes.object,
  // eslint-disable-next-line
  textStyle: PropTypes.object,
  readOnly: PropTypes.bool,
  size: PropTypes.oneOf(["modal", "large"]),
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  error: PropTypes.string
};

export default InputForm;
