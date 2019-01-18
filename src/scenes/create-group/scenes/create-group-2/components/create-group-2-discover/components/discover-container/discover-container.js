import styled from "styled-components";
import Container from "../../../../../../../../components/container";
import { screenWidthsMedias } from "../../../../../../../../configurations/screen";

const DiscoverContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 400px;

  ${screenWidthsMedias.medium`
    flex-direction: row;
    height: 390px;
  `}
`;

export default DiscoverContainer;
