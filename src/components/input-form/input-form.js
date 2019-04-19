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
    const { size, type, placeholder, value, onChange, id, error, ...others } = this.props;
    const { focused } = this.state;
    return (
      <FormContainer size={size} {...others}>
        <FormPlaceholder weight={300} upper={value !== "" || focused}>
          {placeholder}
        </FormPlaceholder>
        <FormInput
          onFocus={() => this.setState({ focused: true })}
          onBlur={() => this.setState({ focused: false })}
          type={type}
          value={value}
          onChange={onChange}
          id={id}
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
  size: undefined,
  type: undefined,
  error: undefined
};

InputForm.propTypes = {
  size: PropTypes.oneOf(["modal"]),
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  error: PropTypes.string
};

export default InputForm;
