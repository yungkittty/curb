import styled from "styled-components";
import Container from "../container";

<<<<<<< HEAD
const AppContainer = styled(Container)`
  display: flex;
=======
const AppContainer = styled(Container).attrs({ id: "app-container" })`
>>>>>>> dfbab837c3013ef21759b82a57f5605c1ea4f679
  position: absolute;
  width: 100%;
  height: 100%;
  padding-left: 80px;
  background-color: ${props => props.theme.backgroundColor};
`;

export default AppContainer;
