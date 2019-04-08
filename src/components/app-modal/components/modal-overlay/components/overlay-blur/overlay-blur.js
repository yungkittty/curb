import React from "react";
import PropTypes from "prop-types";

const OverlayBlur = WrappedComponent => {
  class _OverlayBlur extends React.Component {
    constructor(props) {
      super(props);

      this.commonStyle = {
        width: "100vw",
        height: "100vh",
        top: 0,
        transition: "all 0.3s ease-out"
      };

      this.hideStyle = {
        ...this.commonStyle,
        opacity: 0
      };
      this.showStyle = {
        ...this.commonStyle,
        opacity: 1
      };

      this.state = { render: false, style: this.hideStyle };

      this.onTransitionEnd = this.onTransitionEnd.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState) {
      const { render, style } = this.state;
      return (
        nextProps !== this.props ||
        nextState.render !== render ||
        nextState.style !== style
      );
    }

    componentDidUpdate() {
      const { isAppModalShowed } = this.props;

      if (isAppModalShowed) {
        document.getElementById("app-container").style.filter = "blur(3.5px)";
        // eslint-disable-next-line
        this.setState({ render: true });
        setTimeout(
          () =>
            this.setState({
              style: this.showStyle
            }),
          20
        );
      } else {
        document.getElementById("app-container").style.filter = "";
        // eslint-disable-next-line
        this.setState({ style: this.hideStyle });
      }
    }

    onTransitionEnd() {
      const { isAppModalShowed } = this.props;
      if (!isAppModalShowed) {
        this.setState({
          render: false
        });
      }
    }

    render() {
      const { render, style } = this.state;

      return (
        <WrappedComponent
          {...this.props}
          render={render}
          onTransitionEnd={this.onTransitionEnd}
          style={style}
        />
      );
    }
  }

  _OverlayBlur.propTypes = { isAppModalShowed: PropTypes.bool.isRequired };

  return _OverlayBlur;
};

export default OverlayBlur;
