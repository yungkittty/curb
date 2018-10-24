import styled from "styled-components";
import Section from "../../../../../../components/general/section";
import { screenWidthsMedias } from "../../../../../../configurations/screen";

const ContentContainer = styled(Section)`
  margin: 0 auto;
  width: 100%;

  ${screenWidthsMedias.large` 
  width: 460px;
  padding: 0 32px;
  padding-top: 18px;
  `};
`;

export default ContentContainer;
