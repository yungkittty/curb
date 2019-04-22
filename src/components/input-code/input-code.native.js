import React, { Component } from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import CodeInput from "react-native-confirmation-code-field";
import Container from "../container";
import CodeError from "./components/code-error";

class InputCode extends Component {
  constructor(props) {
    super(props);

    this.codeInput = React.createRef();
  }

  focusFirstNode() {
    const { current } = this.codeInput;
    current.focus();
  }

  render() {
    const { theme, id, fields, onChange, error } = this.props;
    return (
      <Container style={{ position: "relative" }}>
        <CodeInput
          ref={this.codeInput}
          codeLength={fields}
          inputProps={{ onTextChange: value => onChange({ target: { id, value } }) }}
          onFulfill={() => undefined}
          size={46}
          containerProps={{ maxHeight: 46 }}
          cellProps={{
            style: { color: theme.fontColor },
            width: 30,
            height: 60,
            margin: 0,
            marginLeft: 12,
            marginRight: 12,
            fontFamily: "Montserrat-SemiBold",
            fontSize: 22
          }}
          activeColor={!error ? theme.fontColor : theme.errorColor}
          inactiveColor={!error ? theme.primaryColor : theme.errorColor}
          variant="border-b"
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
