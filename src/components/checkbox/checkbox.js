import React, { Component } from "react";
import PropTypes from "prop-types";
import CheckboxContainer from "./components/checkbox-container";
import Root from "./root";
import Label from "../label";

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: false
    };
  }

  setValue(value) {
    this.setState({ value });
  }

  render() {
    const { name, id, label } = this.props;
    return (
      <CheckboxContainer>
        <Root
          name={name}
          value={this.state.value}
          onValueChange={this.setValue.bind(this)}
        />
        <Label htmlFor={id}>{label}</Label>
      </CheckboxContainer>
    );
  }
}

Checkbox.defaultProps = {
  id: undefined,
  name: undefined,
  label: undefined
};

Checkbox.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string
};

export default Checkbox;
