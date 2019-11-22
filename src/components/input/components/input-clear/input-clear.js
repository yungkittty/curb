import React from "react";

const InputClear = WrappedComponent =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.inputRef = React.createRef();
    }

    clear() {
      this.inputRef.current.value = "";
    }

    render() {
      return <WrappedComponent {...this.props} ref={this.inputRef} />;
    }
  };

export default InputClear;
