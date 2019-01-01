import styled from "styled-components";
import Container from "../../../../../../../../../../../../components/container";
import { screenWidthsMedias } from "../../../../../../../../../../../../configurations/screen";

const PreviewContainer = styled(Container)`
  flex: 1;
  text-align: left;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 4px;

  ${screenWidthsMedias.large`
    height: fit-content;
  `}
`;

export default PreviewContainer;
