import styled from "styled-components";
import Container from "../../../container";

const NavigationContainer = styled(Container)`
  display: flex;
  position: fixed;
  left: 0px;
  top: 0px;
  flex-direction: column;
  justify-content: space-between;
  width: 80px;
  height: 100%;
  background-color: ${({ theme }) => theme.pimaryColor};
`;

export default NavigationContainer;
