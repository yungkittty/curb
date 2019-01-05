import styled from "styled-components";
import Container from "../../../../../container";
import { screenWidthsMedias } from "../../../../../../configurations/screen";

const IconContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ icon }) => (icon ? "100" : "20")}px;
  height: 100px;

  ${screenWidthsMedias.medium`
  width: ${({ icon }) => (icon ? "125" : "45")}px;
    height: 125px;
  `}
`;

export default IconContainer;
