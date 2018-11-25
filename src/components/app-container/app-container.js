import styled from "styled-components";
import Container from "../container";
import { screenWidthsMedias } from "../../configurations/screen";

// !TODO: use viewport instead of position absolute?
// !TODO: which size for devices?

const AppContainer = styled(Container).attrs({ id: "app-container" })`
  position: absolute;
  width: 100%;
  height: 100%;
  padding-left: 76px;
  box-sizing: border-box;

  // ...

  ${screenWidthsMedias.medium`padding-left: 78px;`};
  ${screenWidthsMedias.large`padding-left: 80px;`};

  // ...

  background-color: red;
`;

export default AppContainer;
