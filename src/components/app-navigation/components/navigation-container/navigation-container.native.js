import styled from "styled-components";
import Container from "../../../container";

const NavigationContainer = styled(Container)`
  display: flex;
  position: absolute;
  left: 0px;
  top: 0px;
  flex-direction: column;
  width: 70px;
  height: 100%;
  padding-left: 10px;
  padding-top: 10px;
  padding-right: 10px;
  background-color: ${props => props.theme.primaryColor};
`;

export default NavigationContainer;
