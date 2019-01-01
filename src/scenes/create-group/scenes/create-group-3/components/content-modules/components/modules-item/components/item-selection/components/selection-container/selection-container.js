import styled from "styled-components";
import Container from "../../../../../../../../../../../../components/container";
import { screenWidthsMedias } from "../../../../../../../../../../../../configurations/screen";

const SelectionContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75px;
  height: 100px;

  ${screenWidthsMedias.medium`
    width: 94px;
    height: 125px;
  `}
`;

export default SelectionContainer;
