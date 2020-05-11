import _ from "lodash";
import styled from "styled-components";
import withShadow from "../../../../hocs/with-shadow";
import Container from "../../../container";
import ContainerAnimation from "./components/container-animation";

// https://github.com/alekhurst/react-native-elevated-view/blob/master/index.js#L33 // 32

const ModalContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  z-index: 32;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.backgroundColor};
  overflow: hidden;
`;

export default _.flowRight([
  // eslint-disable-line
  ContainerAnimation,
  withShadow(32)
])(ModalContainer);
