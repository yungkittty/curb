import React from "react";
import { withTheme } from "styled-components";
import PropTypes from "prop-types";

const OverlayBlur = WrappedComponent => {
  class _OverlayBlur extends React.Component {
    constructor(props) {
      super(props);

      this.hideStyle = {
        backgroundColor: "rgba(0, 0, 0, 0)"
      };
      this.showStyle = {
        backgroundColor: props.theme.overlayColor
      };

      this.state = { style: this.hideStyle };

      this.onTransitionEnd = this.onTransitionEnd.bind(this);
      this.startAnimation = this.startAnimation.bind(this);

      this.wrappedComponent = React.createRef();
    }

    componentDidMount() {
      const { isAppModalShowed } = this.props;
      const { current: wrappedComponent } = this.wrappedComponent;
      wrappedComponent.focus();
      this.startAnimation(isAppModalShowed);
    }

    componentDidUpdate(prevProps) {
      const { isAppModalShowed } = this.props;
      if (prevProps.isAppModalShowed !== isAppModalShowed)
        // eslint-disable-line
        this.startAnimation(isAppModalShowed);
    }

    onTransitionEnd() {
      const { appModalTransitionEnd } = this.props;
      setTimeout(() => appModalTransitionEnd(), 100);
    }

    startAnimation(state) {
      setTimeout(() => {
        document.getElementById("app-container").style.filter = `blur(${state ? 3.5 : 0}px)`;
        this.setState({
          style: state ? this.showStyle : this.hideStyle
        });
      }, 50);
    }

    render() {
      const { style } = this.state;
      return (
        <WrappedComponent
          {...this.props}
          ref={this.wrappedComponent}
          onTransitionEnd={this.onTransitionEnd}
          style={style}
        />
      );
    }
  }

  _OverlayBlur.propTypes = {
    isAppModalShowed: PropTypes.bool.isRequired,
    appModalTransitionEnd: PropTypes.func.isRequired,
    theme: PropTypes.object.isRequired // eslint-disable-line
  };

  return withTheme(_OverlayBlur);
};

export default OverlayBlur;
