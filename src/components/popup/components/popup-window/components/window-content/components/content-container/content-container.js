import styled from "styled-components";
import Container from "../../../../../../../container";
import { screenWidthsMedias } from "../../../../../../../../configurations/screen";

const ContentContainer = styled(Container)`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 8px 26px;
  flex: 1;

  ${screenWidthsMedias.large`
    margin: 0 auto;

    // Need a proper fix here to hide scrollbar
    // overflow-y: scroll;

    // width: calc(100% + 18px);
  `};
`;

export default ContentContainer;
