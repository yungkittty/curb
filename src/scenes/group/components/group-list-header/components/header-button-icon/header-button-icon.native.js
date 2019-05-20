import styled from "styled-components";
import Button from "../../../../../../components/button";
import Icon from "../../../../../../components/icon";
import { windowDimensions } from "../../../../../../configurations/window";

const HeaderButtonIcon = styled(Button).attrs(() => ({ component: Icon }))`
  position: absolute;
  top: ${windowDimensions.statusBarHeight + 20}px;
`;

export default HeaderButtonIcon;
