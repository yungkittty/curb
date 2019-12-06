import React from "react";

const InputFunc = WrappedComponent =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.inputRef = React.createRef();
    }

    clear() {
      this.inputRef.current.clear();
    }

    render() {
      return <WrappedComponent {...this.props} ref={this.inputRef} />;
    }
  };

export default InputFunc;
