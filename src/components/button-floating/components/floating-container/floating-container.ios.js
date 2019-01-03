import styled from "styled-components";
import Button from "../../../button";

// https://github.com/alekhurst/react-native-elevated-view/blob/master/index.js#L33

const FloatingContainer = styled(Button)`
  display: flex;
  position: absolute;
  left: 15px;
  bottom: 15px;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  shadow-offset: 0px 3.6px; // 6
  shadow-radius: 3.24px; // 6
  shadow-color: rgba(0, 0, 0, 0.189); // 6
  background-color: ${props => props.theme.primaryColor};
`;

export default FloatingContainer;
