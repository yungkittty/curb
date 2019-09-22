import styled from "styled-components";
import Container from "../../../container";

// https://github.com/alekhurst/react-native-elevated-view/blob/master/index.js#L33 // 6

const DropdownContainer = styled(Container)`
  position: absolute;
  width: 240px;
  border-radius: 20px;
  background: white;
  box-shadow: 0px 3.6px 3.24px 0px rgba(0, 0, 0, 0.189);
  overflow: hidden;
`;

export default DropdownContainer;
