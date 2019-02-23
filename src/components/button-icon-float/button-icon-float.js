import styled from "styled-components";
import ButtonIcon from "../button-icon";

// https://github.com/alekhurst/react-native-elevated-view/blob/master/index.js#L33

const ButtonIconFloat = styled(ButtonIcon).attrs(props => ({
  size: "medium",
  color: props.theme.secondaryVariantColor
}))`
  position: absolute;
  right: 30px;
  bottom: 30px;
  zIndex: 3;
  width: 80px;
  height: 80px;
  border-radius: 40px;
  box-shadow: 0px 1.2px 1.08px 0px rgba(0, 0, 0, 0.183); // 2
  background-color: ${props => props.theme.primaryColor};
`;

export default ButtonIconFloat;
