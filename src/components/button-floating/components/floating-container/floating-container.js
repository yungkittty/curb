import styled from "styled-components";
import Button from "../../../button";

// https://github.com/alekhurst/react-native-elevated-view/blob/master/index.js#L33

const FloatingContainer = styled(Button)`
  display: flex;
  position: absolute;
  right: 30px;
  bottom: 30px;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border-radius: 40px;
  box-shadow: 0px 3.6px 3.24px 0px rgba(0, 0, 0, 0.189); // 6
  background-color: ${props => props.theme.primaryColor};
`;

export default FloatingContainer;
