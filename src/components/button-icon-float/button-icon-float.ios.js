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
  zIndex: 4;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  shadow-offset: 0px 2.4px; // 4
  shadow-radius: 2.16px; // 4
  shadow-color: rgba(0, 0, 0, 0.186); // 4
  background-color: ${props => props.theme.primaryColor};
`;

export default ButtonIconFloat;
