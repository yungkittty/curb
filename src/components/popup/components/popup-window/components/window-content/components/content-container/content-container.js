import styled from "styled-components";
import Section from "../../../../../../../general/section";
import { screenWidthsMedias } from "../../../../../../../../configurations/screen";

const ContentContainer = styled(Section)`
  flex: 1;

  ${screenWidthsMedias.large`
    overflow-y: scroll;

    // Fix to hide scrollbar
    width: calc(100% + 18px);
  `};
`;

export default ContentContainer;
