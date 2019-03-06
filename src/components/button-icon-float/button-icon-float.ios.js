import styled from "styled-components";
import ButtonIcon from "../button-icon";

const ButtonIconFloat = styled(ButtonIcon).attrs(props => ({
  size: "medium",
  color: props.theme.secondaryVariantColor
}))`
  position: absolute;
  right: 15px;
  bottom: 15px;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  shadow-offset: 0px 3.6px; // 6
  shadow-radius: 3.24px; // 6
  shadow-color: rgba(0, 0, 0, 0.189); // 6
  background-color: ${props => props.theme.primaryColor};
`;

export default ButtonIconFloat;
