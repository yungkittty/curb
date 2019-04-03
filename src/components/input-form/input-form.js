import React, { Component } from "react";
import PropTypes from "prop-types";
import InputFormContainer from "./components/input-form-container";
import InputFormPlaceholder from "./components/input-form-placeholder";
import Input from "../input";
import InputFormError from "./components/input-form-error";

class InputForm extends Component {
  constructor(props) {
    super(props);

    this.state = { focused: false };
  }

  render() {
    const { size, type, placeholder, value, onChange, id, error } = this.props;
    const { focused } = this.state;
    return (
      <InputFormContainer size={size}>
        <InputFormPlaceholder weight={300} upper={value !== "" || focused}>
          {placeholder}
        </InputFormPlaceholder>
        <Input
          onFocus={() => this.setState({ focused: true })}
          onBlur={() => this.setState({ focused: false })}
          type={type}
          value={value}
          onChange={onChange}
          id={id}
          error={error}
        />
        {error && (
          <InputFormError type="h5" weight={300}>
            {error}
          </InputFormError>
        )}
      </InputFormContainer>
    );
  }
}

InputForm.defaultProps = {
  size: undefined,
  type: undefined,
  placeholder: undefined,
  error: undefined
};

InputForm.propTypes = {
  size: PropTypes.oneOf(["modal"]),
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  error: PropTypes.string
};

export default InputForm;
