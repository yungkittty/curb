import React from "react";
import PropTypes from "prop-types";

// https://stackoverflow.com/a/24676492

const InputFunc = WrappedComponent => {
  class _InputFunc extends React.Component {
    constructor(props) {
      super(props);
      this.inputRef = React.createRef();
    }

    componentDidUpdate() {
      const { autoResize } = this.props;
      if (!autoResize) return;
      const { current: input } = this.inputRef;
      input.style.height = "1px";
      input.style.height = `${input.scrollHeight}px`;
    }

    clear() {
      this.inputRef.current.value = "";
    }

    render() {
      return <WrappedComponent {...this.props} ref={this.inputRef} />;
    }
  }

  _InputFunc.defaultProps = { autoResize: false };

  _InputFunc.propTypes = { autoResize: PropTypes.bool };

  return _InputFunc;
};

export default InputFunc;
