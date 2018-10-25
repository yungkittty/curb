import styled from "styled-components";
import Container from "../../../../../../components/container";
import { screenWidthsMedias } from "../../../../../../configurations/screen";

const ContentContainer = styled(Container)`
  height: 100%;

  ${screenWidthsMedias.large`
    width: 460px;
  `};
`;

export default ContentContainer;
