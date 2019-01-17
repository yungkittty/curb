import styled from "styled-components";
import ButtonIcon from "../../../../../button-icon";

const HeaderButtonIcon = styled(ButtonIcon).attrs(props => ({
  size: "small",
  color: props.theme.fontColor
}))`
  height: 75px;
  width: 75px;
`;

export default HeaderButtonIcon;
