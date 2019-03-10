import styled from "styled-components";
import Container from "../../../../../container";

const HeaderStep = styled(Container)`
  width: 10px;
  height: 10px;
  margin: 0 9px;
  border-radius: 5px;
  background-color: ${({ enabled, theme }) =>
    enabled ? theme.primaryColor : theme.secondaryColor};
`;

export default HeaderStep;
