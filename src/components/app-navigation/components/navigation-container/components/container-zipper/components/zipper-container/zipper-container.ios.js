import styled from "styled-components";
import Container from "../../../../../../../container";

// https://github.com/alekhurst/react-native-elevated-view/blob/master/index.js#L33

const ZipperContainer = styled(Container)`
  display: flex;
  position: absolute;
  left: 70px;
  top: 65%;
  zIndex: 6;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 30px;
  border-top-end-radius: 5px;
  border-bottom-end-radius: 5px;
  shadow-offset: 0px 3.6px; // 6
  shadow-radius: 3.24px; // 6
  shadow-color: rgba(0, 0, 0, 0.189); // 6
  background-color: ${props => props.theme.primaryColor};
`;

export default ZipperContainer;
