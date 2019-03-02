import styled from "styled-components";
import Container from "../../../../../container";

// https://github.com/alekhurst/react-native-elevated-view/blob/master/index.js#L33

const ContainerContentContainer = styled(Container)`
  display: flex;
  position: absolute;
  left: 0px;
  zIndex: 8;
  flex-direction: column;
  width: 70px;
  height: 100%;
  padding-left: 10px;
  padding-top: 10px;
  padding-right: 10px;
  shadow-offset: 0px 4.8px; // 8
  shadow-radius: 4.32px; // 8
  shadow-color: rgba(0, 0, 0, 0.192); // 8
  background-color: ${props => props.theme.primaryColor};
`;

export default ContainerContentContainer;
