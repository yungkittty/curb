import styled from "styled-components";
import Section from "../../../../components/general/section";
import { screenWidthsMedia } from "../../../../configurations/screen";

const PopupContainer = styled(Section)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  
  ${screenWidthsMedia.large`
    background: rgba(0, 0, 0, 0.2);
  `}
`;

export default PopupContainer;
