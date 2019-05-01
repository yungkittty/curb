import styled from "styled-components";
import Container from "../../../../../container";

// https://github.com/alekhurst/react-native-elevated-view/blob/master/index.js#L33 // 4

const SelectorContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: -20px;
  overflow: hidden;
  border-radius: 20px;
  background: ${({ theme }) => theme.primaryVariantColor};
  width: 40px;
  height: 40px;
  z-index: 4;
  box-shadow: 0px 3.6px 3.24px 0px rgba(0, 0, 0, 0.189);
`;

export default SelectorContainer;
