import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-native";
import { TouchableNativeFeedback, View } from "react-native";
import styled from "styled-components";

const ButtonContainer = styled(({ onClick, children, style, ...others }) =>
  typeof onClick === "string" || onClick === "object" ? (
    <Link {...others} component={TouchableNativeFeedback} to={onClick} useForeground>
      <View style={style}>{children}</View>
    </Link>
  ) : (
    <TouchableNativeFeedback
      {...others}
      onPress={onClick}
      background={TouchableNativeFeedback.SelectableBackground()}
      useForeground
    >
      <View style={style}>{children}</View>
    </TouchableNativeFeedback>
  )
)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

ButtonContainer.defaultProps = {
  onClick: undefined
};

ButtonContainer.propTypes = {
  onClick: PropTypes.oneOfType([
    // eslint-disable-line
    PropTypes.string,
    PropTypes.object,
    PropTypes.func
  ])
};

export default ButtonContainer;
