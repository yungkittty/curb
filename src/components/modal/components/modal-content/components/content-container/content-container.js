import styled from "styled-components";
import ScrollContainer from "../../../../../scroll-container";
import { screenWidthsMedias } from "../../../../../../configurations/screen";

const ContentContainer = styled(ScrollContainer)`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 8px 26px;
  flex: 1;

  ${screenWidthsMedias.large`

    // Need a proper fix here to hide scrollbar
    // overflow-y: scroll;

    // width: calc(100% + 18px);
  `};
`;

export default ContentContainer;
