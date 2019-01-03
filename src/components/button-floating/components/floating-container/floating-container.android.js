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
  elevation: 6;
  background-color: ${props => props.theme.primaryColor};
`;

export default FloatingContainer;
