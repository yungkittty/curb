import styled from "styled-components";
import Container from "../../../../../container";
import { screenWidthsMedias } from "../../../../../../configurations/screen";

const SelectionContainer = styled(Container)`
  position: absolute;
  right: 0px;
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
