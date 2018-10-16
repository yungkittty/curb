import styled from "styled-components";
import Section from "../../../../../../../general/section";
import { screenWidthsMedias } from "../../../../../../../../configurations/screen";

const ContentContainer = styled(Section)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 8px 26px;
  flex: 1;

  ${screenWidthsMedias.large`
    margin: 0 auto;

    overflow-y: scroll;

    // Fix to hide scrollbar
    width: calc(100% + 18px);
  `};
`;

export default ContentContainer;
