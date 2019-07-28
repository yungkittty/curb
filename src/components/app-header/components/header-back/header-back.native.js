import React from "react";
import PropTypes from "prop-types";
import { BackHandler } from "react-native";

// https://facebook.github.io/react-native/docs/backhandler.html

const HeaderBack = WrappedComponent => {
  class _HeaderBack extends React.Component {
    constructor(props) {
      super(props);
      this.onBackClick = this.onBackClick.bind(this);
      this.backPressListener = BackHandler.addEventListener("hardwareBackPress", this.onBackClick);
    }

    componentWillMount() {
      this.backPressListener.remove();
    }

    onBackClick() {
      const { onBackClick } = this.props;
      if (!onBackClick) return true;
      onBackClick();
      return false;
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
