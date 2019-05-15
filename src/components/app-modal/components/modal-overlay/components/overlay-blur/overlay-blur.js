import React from "react";
import { withTheme } from "styled-components";
import PropTypes from "prop-types";

const OverlayBlur = WrappedComponent => {
  class _OverlayBlur extends React.Component {
    constructor(props) {
      super(props);

      this.commonStyle = {
        width: "100vw",
        height: "100vh",
        top: 0,
        transition: "all 0.45s ease-out"
      };

      this.hideStyle = {
        ...this.commonStyle,
        backgroundColor: "rgba(0, 0, 0, 0)"
      };
      this.showStyle = {
        ...this.commonStyle,
        backgroundColor: props.theme.overlayColor
      };

      this.state = { style: this.hideStyle };

      this.onTransitionEnd = this.onTransitionEnd.bind(this);
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

    onTransitionEnd() {
      const { isAppModalShowed, appModalCloseTransitionEnd } = this.props;
      if (!isAppModalShowed) setTimeout(() => appModalCloseTransitionEnd(), 50);
    }

    startAnimation(state) {
      document.getElementById("app-container").style.filter = `blur(${state ? 3.5 : 0}px)`;
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
      return <WrappedComponent {...this.props} onTransitionEnd={this.onTransitionEnd} style={style} />;
    }
  }

  _OverlayBlur.propTypes = {
    isAppModalShowed: PropTypes.bool.isRequired,
    appModalCloseTransitionEnd: PropTypes.func.isRequired,
    // eslint-disable-next-line
    theme: PropTypes.object.isRequired
  };

  return withTheme(_OverlayBlur);
};

export default OverlayBlur;
