import styled from "styled-components";
import ButtonIcon from "../../../../../button-icon";

const HeaderButtonIcon = styled(ButtonIcon).attrs(props => ({ size: "small", color: props.theme.fontColor }))`
  position: absolute;
  height: 75px;
  width: 75px;
`;

export default HeaderButtonIcon;
