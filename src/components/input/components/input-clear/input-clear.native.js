import React from "react";

const InputClear = WrappedComponent =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.inputRef = React.createRef();
    }

    clear() {
      console.log(this.inputRef.current);
      this.inputRef.current.clear();
    }

    render() {
      return <WrappedComponent {...this.props} ref={this.inputRef} />;
    }
  };

export default InputClear;
