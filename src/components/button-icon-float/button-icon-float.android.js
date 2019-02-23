import styled from "styled-components";
import ButtonIcon from "../button-icon";

// https://github.com/alekhurst/react-native-elevated-view/blob/master/index.js#L33

const ButtonIconFloat = styled(ButtonIcon).attrs(props => ({
  size: "medium",
  color: props.theme.secondaryVariantColor
}))`
  position: absolute;
  bottom: 15px;
  right: 15px;
  zIndex: 2;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  elevation: 2;
  background-color: ${props => props.theme.primaryColor};
`;

export default ButtonIconFloat;
