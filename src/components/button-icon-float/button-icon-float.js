import styled from "styled-components";
import Button from "../button";
import Icon from "../icon";

// https://github.com/alekhurst/react-native-elevated-view/blob/master/index.js#L33 // 4

const ButtonIconFloat = styled(Button).attrs(props => ({
  component: Icon,
  size: "small",
  color: props.theme.secondaryVariantColor
}))`
  position: fixed;
  right: 30px;
  bottom: 30px;
  z-index: 4;
  width: 80px;
  height: 80px;
  border-radius: 40px;
  box-shadow: 0px 2.4px 2.16px 0px rgba(0, 0, 0, 0.186);
  background-color: ${props => props.theme.primaryColor};
`;

export default ButtonIconFloat;
