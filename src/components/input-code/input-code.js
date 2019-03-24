import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import ReactCodeInput from "react-code-input";
import inputRegex from "../../utils/input-regex";

class InputCode extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { id } = this.props;
    const nodes = document.getElementsByClassName(id)[0].childNodes;
    for (let i = 0; i < nodes.length; i += 1) {
      nodes[i].onkeydown = event =>
        RegExp(inputRegex.number).test(Number(event.key)) &&
        event.keyCode !== 32;
    }
  }

  render() {
    const { theme, id, fields, onChange } = this.props;

    return (
      <ReactCodeInput
        fields={fields}
        className={id}
        onChange={value =>
          onChange({
            target: {
              id,
              value
            }
          })
        }
        inputStyle={{
          width: "36px",
          height: "42px",
          margin: "0px 12px",
          padding: "18px 4px",
          fontWeight: 600,
          fontFamily: "Montserrat",
          outline: "none",
          textAlign: "center",
          fontSize: "32px",
          color: theme.fontColor,
          border: "0px",
          borderBottom: `1px solid ${theme.primaryColor}`
        }}
      />
    );
  }
}

InputCode.propTypes = {
  // eslint-disable-next-line
  theme: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  fields: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

export default withTheme(InputCode);
