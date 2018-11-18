import styled from "styled-components";
import Container from "../../../../../../components/container";
import { screenWidthsMedias } from "../../../../../../configurations/screen";

const ContentContainer = styled(Container)`
  ${screenWidthsMedias.large`
    width: 460px;
  `};
`;

export default ContentContainer;
