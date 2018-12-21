import styled from "styled-components";
import Container from "../container";

const AppContainer = styled(Container).attrs({ id: "app-container" })`
  position: absolute;
  width: 100%;
  height: 100%;
  padding-left: 80px;
<<<<<<< HEAD
  background-color: ${props => props.theme.backgroundColor};
=======
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.backgroundColor};
>>>>>>> c6916fa5c8ecb1c8cf35fe4fc568e1793fe12c66
`;

export default AppContainer;
