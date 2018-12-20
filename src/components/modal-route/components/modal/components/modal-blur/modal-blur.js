import React from "react";

const ModalBlur = WrappedComponent =>
  class extends React.Component {
    componentDidMount() {
      document.getElementById("app-container").style.filter = "blur(3.5px)";
    }

    componentWillUnmount() {
      document.getElementById("app-container").style.filter = "blur(0px)";
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };

export default ModalBlur;
