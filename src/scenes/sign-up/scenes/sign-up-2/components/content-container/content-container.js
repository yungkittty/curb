import styled from "styled-components";
import Container from "../../../../../../components/container";
import { screenWidthsMedias } from "../../../../../../configurations/screen";

const ContentContainer = styled(Container)`
  margin: 0 auto;
  width: 100%;

  ${screenWidthsMedias.large` 
  width: 460px;
  padding: 0 32px;
  padding-top: 18px;
  `};
`;

export default ContentContainer;
