import React from "react";
import PropTypes from "prop-types";
import { BackHandler } from "react-native";

// https://facebook.github.io/react-native/docs/backhandler.html

const HeaderBack = WrappedComponent => {
  class _HeaderBack extends React.Component {
    constructor(props) {
      super(props);
      this.backPressListener = undefined;
    }

    componentDidMount() {
      this.backPressListener =
        // eslint-disable-line
        BackHandler.addEventListener("hardwareBackPress", () => {
          const { onBackClick } = this.props;
          if (!onBackClick) return false;
          onBackClick();
          return true;
        });
    }

    componentWillUnmount() {
      this.backPressListener.remove();
    }

    render() {
      const { onBackClick, ...others } = this.props;
      return <WrappedComponent {...others} />;
    }
  }

  _HeaderBack.defaultProps = { onBackClick: undefined };

  _HeaderBack.propTypes = { onBackClick: PropTypes.func };

  return _HeaderBack;
};

export default HeaderBack;
