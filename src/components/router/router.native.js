import React from "react";
import PropTypes from "prop-types";
import { NativeRouter, BackButton } from "react-router-native";

const Router = ({ children }) => (
  <NativeRouter>
    <BackButton>
      {/* eslint-disable-line */}
      {children}
    </BackButton>
  </NativeRouter>
);

Router.propTypes = {
  children: PropTypes.node.isRequired
};

export default Router;
