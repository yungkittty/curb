import React from "react";
import PropTypes from "prop-types";

const ContainerAnimation = WrappedComponent => {
  class _ContainerAnimation extends React.Component {
    constructor(props) {
      super(props);

      this.hideStyle = {
        opacity: 0,
        transform: "translateY(-20px)"
      };

      this.showStyle = {
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
      setTimeout(
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
