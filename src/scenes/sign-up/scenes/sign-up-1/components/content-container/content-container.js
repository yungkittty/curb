import styled from "styled-components";
import Section from "../../../../../../components/general/section";
import { screenWidthsMedias } from "../../../../../../configurations/screen";

const ContentContainer = styled(Section)`
  height: 100%;

  ${screenWidthsMedias.large`
    width: 460px;
  `};
`;

export default ContentContainer;
