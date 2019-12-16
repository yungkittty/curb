import _ from "lodash";
import styled from "styled-components";
import withShadow from "../../../../hocs/with-shadow";
import Container from "../../../container";
import ContainerPropagation from "./components/container-propagation";
import ContainerAnimation from "./components/container-animation";

// https://github.com/alekhurst/react-native-elevated-view/blob/master/index.js#L33 // 32

const ModalContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  z-index: 32;
  width: 700px;
  height: 740px;
  max-height: 100%;
  border-radius: 25px;
  transition-property: opacity, transform;
  transition-duration: 0.3s;
  transition-timing-function: ease-out;
  background-color: ${({ theme }) => theme.backgroundColor};
  overflow: hidden;
`;

export default _.flowRight([
  // eslint-disable-line
  ContainerPropagation,
  ContainerAnimation,
  withShadow(32)
])(ModalContainer);
