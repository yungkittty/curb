import { Platform } from "react-native";
import styled from "styled-components";
import Container from "../../../../../../../container";

// https://github.com/alekhurst/react-native-elevated-view/blob/master/index.js#L33 // 8
// https://i.stack.imgur.com/jloe7.jpg

const ZipperContainer = styled(Container)`
  display: flex;
  position: absolute;
  left: 70px;
  top: 65%;
  z-index: 8;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 30px;
  border-top-end-radius: 5px;
  border-bottom-end-radius: 5px;
  ${Platform.OS === "android" ? `
    elevation: 8;
  ` : `
    shadow-offset: 4.32px 4.8px;
    shadow-radius: 4.32px;
    shadow-color: rgba(0, 0, 0, 1);
    shadow-opacity: 0.192;
  `}
  background-color: ${props => props.theme.primaryColor};
`;

export default ZipperContainer;
