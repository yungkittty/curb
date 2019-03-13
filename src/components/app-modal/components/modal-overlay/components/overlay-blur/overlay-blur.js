import React from "react";

const OverlayBlur = WrappedComponent =>
  class extends React.Component {
    componentDidMount() {
      document.getElementById("app-container").style.filter = "blur(3.5px)";
    }

    componentWillUnmount() {
      document.getElementById("app-container").style.filter = "";
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };

export default OverlayBlur;
