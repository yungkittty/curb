import styled from "styled-components";
import { screenWidthsMedia } from "../../../../../../configurations/screen";
import Section from "../../../../../../components/general/section";

const NavbarContainer = styled(Section)`
  background: #e0e0e0;
  height: 100%;
  width: 80px;

  ${screenWidthsMedia.large`background: dodgerblue;`};
`;

export default NavbarContainer;
