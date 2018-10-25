import styled from "styled-components";
import Container from "../../../container";
import { screenWidthsMedias } from "../../../../configurations/screen";

const NavbarContainer = styled(Container)`
  background: #e0e0e0;
  height: 100%;
  width: 76px;

  ${screenWidthsMedias.large`
    width: 80px;
  `};
`;

export default NavbarContainer;
