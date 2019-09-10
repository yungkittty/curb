import React from "react";
import { withTheme } from "styled-components";
import PropTypes from "prop-types";

const OverlayBlur = WrappedComponent => {
  class _OverlayBlur extends React.Component {
    constructor(props) {
      super(props);

      this.hideStyle = {
        backgroundColor: "transparent"
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
      this.startAnimation(isAppModalShowed);
      this.wrappedComponent.current.focus();
    }

    componentDidUpdate(prevProps) {
      const { isAppModalShowed, areAppModalButtonsDisabled } = this.props;
      if (prevProps.isAppModalShowed !== isAppModalShowed) {
        this.startAnimation(isAppModalShowed);
      } else if (prevProps.areAppModalButtonsDisabled !== areAppModalButtonsDisabled) {
        this.wrappedComponent.current.focus();
      }
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
    areAppModalButtonsDisabled: PropTypes.bool.isRequired,
    appModalTransitionEnd: PropTypes.func.isRequired,
    theme: PropTypes.object.isRequired // eslint-disable-line
  };

  return withTheme(_OverlayBlur);
};

export default OverlayBlur;
