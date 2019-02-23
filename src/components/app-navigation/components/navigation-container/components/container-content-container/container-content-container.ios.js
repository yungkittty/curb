import styled from "styled-components";
import Container from "../../../../../container";

// https://github.com/alekhurst/react-native-elevated-view/blob/master/index.js#L33

const ContainerContentContainer = styled(Container)`
  display: flex;
  position: absolute;
  left: 0px;
  zIndex: 6;
  flex-direction: column;
  width: 70px;
  height: 100%;
  padding-left: 10px;
  padding-top: 10px;
  padding-right: 10px;
  shadow-offset: 0px 3.6px; // 6
  shadow-radius: 3.24px; // 6
  shadow-color: rgba(0, 0, 0, 0.189); // 6
  background-color: ${props => props.theme.primaryColor};
`;

export default ContainerContentContainer;
