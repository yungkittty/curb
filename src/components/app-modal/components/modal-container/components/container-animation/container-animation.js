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
        transition: "all 0.5s ease-out"
      };

      this.hideStyle = {
        ...this.commonStyle,
        opacity: 0,
        transform: "translate3d(0, 40px, 0)"
      };

      this.showStyle = {
        ...this.commonStyle,
        opacity: 1,
        transform: "translate3d(0, 0, 0)"
      };

      this.state = {
        render: false,
        style: this.hideStyle
      };

      this.onTransitionEnd = this.onTransitionEnd.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState) {
      const { isAppModalShowed, children } = this.props;
      const { render, style } = this.state;
      return (
        nextProps.isAppModalShowed !== isAppModalShowed ||
        nextProps.children !== children ||
        nextState.render !== render ||
        nextState.style !== style
      );
    }

    componentDidUpdate() {
      const { isAppModalShowed } = this.props;

      if (isAppModalShowed) {
        // eslint-disable-next-line
        this.setState({ render: true });
        setTimeout(
          () =>
            this.setState({
              style: this.showStyle
            }),
          80
        );
      } else {
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
          onTransitionEnd={this.onTransitionEnd}
          render={render}
          style={style}
        />
      );
    }
  }

  _ContainerAnimation.propTypes = {
    isAppModalShowed: PropTypes.bool.isRequired,
    // eslint-disable-next-line
    children: PropTypes.arrayOf(PropTypes.node).isRequired
  };

  return _ContainerAnimation;
};

export default ContainerAnimation;
