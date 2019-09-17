import { Platform } from "react-native";
import styled from "styled-components";
import Container from "../../../container";

// https://github.com/alekhurst/react-native-elevated-view/blob/master/index.js#L33 // 6

const DropdownContainer = styled(Container)`
  position: absolute;
  width: 170px;
  border-radius: 16px;
  background: white;
  z-index: 6;
  ${Platform.OS === "android"
    ? `
    elevation: 6;
  `
    : `
    shadow-offset: 0px 3.6px;
    shadow-radius: 3.24px;
    shadow-color: rgba(0, 0, 0, 1);
    shadow-opacity: 0.189;
  `}
`;

export default DropdownContainer;
