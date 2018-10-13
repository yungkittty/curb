import styled from "styled-components";
import Section from "../../../../../general/section";
import { screenWidthsMedia } from "../../../../../../configurations/screen";

const NavbarContainer = styled(Section)`
  background: #e0e0e0;
  height: 100%;
  width: 76px;
  
  ${screenWidthsMedia.large`
    width: 80px;
  `}
`;

export default NavbarContainer;
