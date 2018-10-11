import styled from "styled-components";
import Section from "../../../../../../../general/section";
import { screenWidthsMedia } from "../../../../../../../../configurations/screen";

const ContentContainer = styled(Section)`
  flex: 1;

  ${screenWidthsMedia.large`
    overflow-y: scroll;

    // Fix to hide scrollbar
    width: calc(100% + 18px);
    padding-right: 18px;
  `}
`;

export default ContentContainer;
