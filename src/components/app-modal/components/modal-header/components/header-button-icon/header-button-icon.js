import styled from "styled-components";
import Button from "../../../../../button";
import Icon from "../../../../../icon";

const HeaderButtonIcon = styled(Button).attrs(props => ({
  component: Icon,
  size: "extra-small",
  color: props.theme.fontColor
}))`
  position: absolute;
  height: 75px;
  width: 75px;
`;

export default HeaderButtonIcon;
