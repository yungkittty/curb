import styled from "styled-components";
import Container from "../../../container";

// https://blog.reactnativecoach.com/creating-draggable-component-with-react-native-132d30c27cb0

const NavigationContainer = styled(Container)`
  display: flex;
  position: fixed;
  left: 0px;
  justify-content: space-between;
  background: #e0e0e0;
  width: 76px;
  height: 100%;
`;

export default NavigationContainer;
