import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import L from "./root";
import { TouchableHighlight } from "react-native";

const link = ({ style, children, to, onClick }) =>
  to ? (
    <L
      style={style}
      to={{ pathname: to.path, state: { isModal: to.isModal ? true : false } }}
    >
      {children}
    </L>
  ) : (
    <TouchableHighlight style={style} onPress={onClick}>
      {children}
    </TouchableHighlight>
  );

link.defaultProps = {
  to: undefined,
  onClick: undefined
};

link.propTypes = {
  to: PropTypes.object,
  onClick: PropTypes.func
};

const Link = styled(link)``;

export default Link;
