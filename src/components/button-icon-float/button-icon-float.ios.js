import styled from "styled-components";
import ButtonIcon from "../button-icon";

// https://github.com/alekhurst/react-native-elevated-view/blob/master/index.js#L33

const ButtonIconFloat = styled(ButtonIcon).attrs(props => ({
  size: "medium",
  color: props.theme.secondaryVariantColor
}))`
  position: absolute;
  right: 15px;
  bottom: 15px;
  zIndex: 3;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  shadow-offset: 0px 1.2px; // 2
  shadow-radius: 1.08px; // 2
  shadow-color: rgba(0, 0, 0, 0.183); // 2
  background-color: ${props => props.theme.primaryColor};
`;

export default ButtonIconFloat;
