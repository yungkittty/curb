import { Platform } from "react-native";
import styled from "styled-components";
import Container from "../../../container";

// https://github.com/alekhurst/react-native-elevated-view/blob/master/index.js#L33 // 4

const CardContainer = styled(Container)`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  background-color: white;
  z-index: 4;
  ${Platform.OS === "android"
    ? `
    elevation: 4;
  `
    : `
    shadow-offset: 0px 2.4px;
    shadow-radius: 2.16px;
    shadow-color: rgba(0, 0, 0, 1);
    shadow-opacity: 0.186;
  `}
`;

export default CardContainer;
