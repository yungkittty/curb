import React from "react";
import { Link as ReactRouterNativeLink } from "react-router-native";
import styled from "styled-components";
import Text from "../text";

const Link = styled(ReactRouterNativeLink).attrs(() => ({ component: props => <Text {...props} /> }))`
  color: ${props => props.theme.linkColor};
`;

export default Link;
