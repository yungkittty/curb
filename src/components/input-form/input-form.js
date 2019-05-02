import React, { Component } from "react";
import PropTypes from "prop-types";
import FormContainer from "./components/form-container";
import FormPlaceholder from "./components/form-placeholder";
import FormInput from "./components/form-input";
import FormError from "./components/form-error";

class InputForm extends Component {
  constructor(props) {
    super(props);

    this.state = { focused: false };
  }

  render() {
    const {
      containerStyle,
      textStyle,
      placeholder,
      size,
      error,
      value,
      forwardedRef,
      ...others
    } = this.props;
    const { focused } = this.state;

    console.log(forwardedRef);

    return (
      <FormContainer style={containerStyle} size={size}>
        {placeholder && (
          <FormPlaceholder weight={300} upper={value !== "" || focused}>
            {placeholder}
          </FormPlaceholder>
        )}
        <FormInput
          {...others}
          ref={forwardedRef}
          style={textStyle}
          onFocus={() => this.setState({ focused: true })}
          onBlur={() => this.setState({ focused: false })}
          value={value}
          error={error}
        />
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
  size: undefined,
  placeholder: undefined,
  error: undefined
};

InputForm.propTypes = {
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

// eslint-disable-next-line
export default React.forwardRef((props, forwardedRef) => (
  <InputForm {...props} forwardedRef={forwardedRef} />
));
