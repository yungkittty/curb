import React from "react";
import InputContainer from "./components/input-container";

// https://github.com/yungkittty/curb/blob/develop/src/components/text/text.js

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  clear() {
    this.inputRef.current.value = "";
  }

  render() {
    return <InputContainer {...this.props} ref={this.inputRef} />;
  }
}

export default Input;
