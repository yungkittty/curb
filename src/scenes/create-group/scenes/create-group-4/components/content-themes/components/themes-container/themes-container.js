import styled from "styled-components";
import Container from "../../../../../../../../components/container";
import { screenWidthsMedias } from "../../../../../../../../configurations/screen";

const ThemesContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${screenWidthsMedias.medium`
    flex-direction: row;
  `}
`;

export default ThemesContainer;
