import styled from "styled-components";
import Container from "../../../../../container";

// https://github.com/alekhurst/react-native-elevated-view/blob/master/index.js#L33

const ContainerContentContainer = styled(Container)`
  display: flex;
  position: absolute;
  left: 0px;
  z-index: 8;
  flex-direction: column;
  width: 70px;
  height: 100%;
  padding-left: 10px;
  padding-top: 10px;
  padding-right: 10px;
  elevation: 8;
  background-color: ${props => props.theme.primaryColor};
`;

export default ContainerContentContainer;
