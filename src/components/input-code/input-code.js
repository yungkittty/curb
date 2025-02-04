import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import ReactCodeInput from "react-code-input";
import inputRegex from "../../utils/input-regex";
import Container from "../container";
import CodeError from "./components/code-error";

class InputCode extends Component {
  constructor(props) {
    super(props);

    this.state = { ctrlDown: false };

    this.handleKey = this.handleKey.bind(this);
  }

  componentDidMount() {
    const { id } = this.props;
    const nodes = document.getElementsByClassName(id)[0].childNodes;
    for (let i = 0; i < nodes.length; i += 1) {
      nodes[i].onkeydown = event => this.handleKey(true, event);
      nodes[i].onkeyup = event => this.handleKey(false, event);
    }
  }

  componentWillUnmount() {
    const { id } = this.props;
    const nodes = document.getElementsByClassName(id)[0].childNodes;
    for (let i = 0; i < nodes.length; i += 1) {
      nodes[i].blur();
      nodes[i].onkeydown = undefined;
      nodes[i].onkeyup = undefined;
    }
  }

  focusFirstNode() {
    const { id } = this.props;
    const nodes = document.getElementsByClassName(id)[0].childNodes;
    nodes[0].focus();
  }

  handleKey(pressed, event) {
    const { ctrlDown } = this.state;
    if (event.keyCode === 17) this.setState({ ctrlDown: pressed });
    return (
      (RegExp(inputRegex.number).test(Number(event.key)) && event.keyCode !== 32) ||
      (ctrlDown && event.keyCode === 86)
    );
  }

  render() {
    const { theme, id, fields, onChange, error } = this.props;
    return (
      <Container style={{ position: "relative" }}>
        <ReactCodeInput
          fields={fields}
          autoFocus={false}
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
            fontFamily: "Montserrat-SemiBold",
            outline: "none",
            textAlign: "center",
            fontSize: "32px",
            color: theme.fontColor,
            border: "0px",
            borderBottom: `1px solid ${!error ? theme.primaryColor : theme.errorColor}`
          }}
        />
        {error && <CodeError type="h5">{error}</CodeError>}
      </Container>
    );
  }
}

InputCode.defaultProps = {
  error: undefined
};

InputCode.propTypes = {
  // eslint-disable-next-line
  theme: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  fields: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string
};

export default withTheme(InputCode);
