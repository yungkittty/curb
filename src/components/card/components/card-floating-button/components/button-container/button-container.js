import styled from "styled-components";
import Button from "../../../../../button";

// https://github.com/alekhurst/react-native-elevated-view/blob/master/index.js#L33 // 4

const ButtonContainer = styled(Button)`
  position: absolute;
  top: ${({ cardSize: { floatingTopPosition } }) => floatingTopPosition}px;
  right: 25px;
  flex-flow: column;
  background: #ffffff;
  box-shadow: 0px 2.4px 2.16px 0px rgba(0, 0, 0, 0.186);
`;

export default ButtonContainer;
