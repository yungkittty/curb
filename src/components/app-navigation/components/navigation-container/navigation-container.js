import styled from "styled-components";
import Container from "../../../container";
import { screenWidthsMedias } from "../../../../configurations/screen";

// !TODO: which size for devices? => modify icons size depending on size.
// !TODO: store value(s) inside theme.

const NavigationContainer = styled(Container)`
  display: flex;
  position: fixed;
  left: 0px;
  flex-direction: column;
  justify-content: space-between;
  width: 76px;
  height: 100%;
  background-color: #e0e0e0;

  // ...

  ${screenWidthsMedias.medium`width: 78px;`};
  ${screenWidthsMedias.large`width: 80px;`};

  // ...
`;

export default NavigationContainer;
