import React from "react";
import PropTypes from "prop-types";

const ContainerAnimation = WrappedComponent => {
  class _ContainerAnimation extends React.Component {
    constructor(props) {
      super(props);

      this.commonStyle = {
        display: "flex",
        position: "absolute",
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

      this.startAnimation = this.startAnimation.bind(this);
    }

    componentDidMount() {
      const { isAppModalShowed } = this.props;
      this.startAnimation(isAppModalShowed);
    }

    componentDidUpdate(prevProps) {
      const { isAppModalShowed } = this.props;
      if (prevProps.isAppModalShowed !== isAppModalShowed) this.startAnimation(isAppModalShowed);
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
    isAppModalShowed: PropTypes.bool.isRequired
  };

  return _ContainerAnimation;
};

export default ContainerAnimation;
