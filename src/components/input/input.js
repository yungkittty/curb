import React, { Component } from "react";
import PropTypes from "prop-types";
import InputContainer from "./components/input-container";
import InputPlaceholder from "./components/input-placeholder";
import InputField from "./components/input-field";
import InputError from "./components/input-error";

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = { focused: false };
  }

  render() {
    const { size, type, placeholder, value, onChange, id, error } = this.props;
    const { focused } = this.state;
    return (
      <InputContainer size={size}>
        <InputPlaceholder upper={value !== "" || focused}>
          {placeholder}
        </InputPlaceholder>
        <InputField
          onFocus={() => this.setState({ focused: true })}
          onBlur={() => this.setState({ focused: false })}
          type={type}
          value={value}
          onChange={onChange}
          id={id}
          error={error}
        />
        {error && <InputError>{error}</InputError>}
      </InputContainer>
    );
  }
}

Input.defaultProps = {
  size: undefined,
  type: undefined,
  placeholder: undefined,
  error: undefined
};

Input.propTypes = {
  size: PropTypes.oneOf(["modal"]),
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  error: PropTypes.string
};

export default Input;
