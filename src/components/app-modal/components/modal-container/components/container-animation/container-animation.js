import React from "react";
import PropTypes from "prop-types";

const ContainerAnimation = WrappedComponent => {
  class _ContainerAnimation extends React.Component {
    constructor(props) {
      super(props);

      this.commonStyle = {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        margin: "auto",
        flexDirection: "column",
        width: 700,
        height: 740,
        borderRadius: 25,
        boxShadow: "0px 10px 35px 0px rgba(0, 0, 0, 0.2)",
        transition: "all 0.3s ease-out"
      };

      this.hideStyle = {
        ...this.commonStyle,
        opacity: 0,
        transform: "translateY(-20px)"
      };

      this.showStyle = {
        ...this.commonStyle,
        opacity: 1,
        transform: "translateY(0px)"
      };

      this.state = {
        style: this.hideStyle
      };

      this.closeAppModal = this.closeAppModal.bind(this);
      this.startAnimation = this.startAnimation.bind(this);
    }

    componentDidMount() {
      const { isAppModalShowed } = this.props;
      this.startAnimation(isAppModalShowed);
      document.addEventListener("keydown", this.closeAppModal);
    }

    shouldComponentUpdate(nextProps, nextState) {
      const { children } = this.props;
      const { style } = this.state;
      return children !== nextProps.children || style !== nextState.style;
    }

    componentDidUpdate() {
      const { isAppModalShowed } = this.props;
      this.startAnimation(isAppModalShowed);
    }

    componentWillUnmount() {
      document.removeEventListener("keydown", this.closeAppModal);
    }

    closeAppModal({ keyCode }) {
      const { hideAppModal } = this.props;
      if (keyCode === 27) hideAppModal();
    }

    startAnimation(state) {
      this.timeout = setTimeout(
        () =>
          this.setState({
            style: state ? this.showStyle : this.hideStyle
          }),
        50
      );
    }

    render() {
      const { style } = this.state;
      return <WrappedComponent {...this.props} style={style} />;
    }
  }

  _ContainerAnimation.propTypes = {
    isAppModalShowed: PropTypes.bool.isRequired,
    children: PropTypes.arrayOf(PropTypes.node).isRequired,
    hideAppModal: PropTypes.func.isRequired
  };

  return _ContainerAnimation;
};

export default ContainerAnimation;
