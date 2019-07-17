import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";
import Container from "../../../container";

const NavigationContainer = ({ children, theme }) => (
  <Container
    style={{
      display: "flex",
      position: "absolute",
      left: 0,
      flexDirection: "column",
      width: 80,
      height: "100%",
      paddingLeft: 10,
      paddingTop: 10,
      paddingRight: 10,
      backgroundColor: theme.primaryColor
    }}
  >
    {children()}
  </Container>
);

NavigationContainer.propTypes = {
  children: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired // eslint-disable-line
};

export default withTheme(NavigationContainer);
