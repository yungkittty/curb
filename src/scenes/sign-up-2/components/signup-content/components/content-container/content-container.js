import styled from "styled-components";
import Section from "../../../../../../components/general/section";
import { screenWidthsMedias } from "../../../../../../configurations/screen";

const ContentContainer = styled(Section)`
  margin: 0 auto;
  padding: 0 28px;
  height: 100%;

  ${screenWidthsMedias.large` 
  width: 460px;
  padding: 0;
  `};
`;

export default ContentContainer;
