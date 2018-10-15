import styled from "styled-components";
import Section from "../../../../../components/general/section";
import { screenWidthsMedia } from "../../../../../configurations/screen";

const OneContainer = styled(Section)`
  margin: 0 auto;
  padding: 0 28px;
  height: 100%;

  ${screenWidthsMedia.large` 
  width: 460px;
  padding: 0;
  `};
`;

export default OneContainer;
