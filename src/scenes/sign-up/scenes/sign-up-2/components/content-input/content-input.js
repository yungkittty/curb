import styled from "styled-components";
import Input from "../../../../../../components/general/input";
import { screenWidthsMedias } from "../../../../../../configurations/screen";

const ContentInput = styled(Input)`
  width: 100%;
  margin-bottom: 56px;

  ${screenWidthsMedias.large`
    box-sizing: border-box;
  `};
`;

export default ContentInput;
