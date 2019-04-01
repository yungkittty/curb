import { Platform } from "react-native";
import styled from "styled-components";
import ButtonIcon from "../button-icon";

// https://github.com/alekhurst/react-native-elevated-view/blob/master/index.js#L33 // 4

const ButtonIconFloat = styled(ButtonIcon).attrs(props => ({ size: "medium", color: props.theme.secondaryVariantColor }))`
  position: absolute;
  right: 15px;
  bottom: 15px;
  z-index: 4;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  ${Platform.OS === "android" ? `
    elevation: 4;
  ` : `
    shadow-offset: 0px 2.4px;
    shadow-radius: 2.16px;
    shadow-color: rgba(0, 0, 0, 0.186);
    shadow-opacity: 1;
  `}
  background-color: ${props => props.theme.primaryColor};
`;

export default ButtonIconFloat;
