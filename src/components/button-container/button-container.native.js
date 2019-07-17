import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-native";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";

const ButtonContainer = styled(({ onClick, ...others }) =>
  typeof onClick === "string" || onClick === "object" ? (
    <Link {...others} component={TouchableOpacity} to={onClick} />
  ) : (
    <TouchableOpacity {...others} onPress={onClick} />
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
