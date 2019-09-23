import styled from "styled-components";
import Button from "../../../../../button";

// https://github.com/alekhurst/react-native-elevated-view/blob/master/index.js#L33 // 6

const ButtonContainer = styled(Button)`
  position: absolute;
  top: ${({ cardSize: { floatingTopPosition } }) => floatingTopPosition}px;
  right: 25px;
  flex-flow: column;
  background: white;
  box-shadow: 0px 3.6px 3.24px 0px rgba(0, 0, 0, 0.189);
`;

export default ButtonContainer;
