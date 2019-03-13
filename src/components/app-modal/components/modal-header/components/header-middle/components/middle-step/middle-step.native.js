import styled from "styled-components";
import Container from "../../../../../../../container";

const MiddleStep = styled(Container)`
  width: 10px;
  height: 10px;
  margin: 0px 5px;
  border-radius: 5px;
  background-color: ${({ enabled, theme }) =>
    enabled ? theme.primaryColor : theme.secondaryColor};
`;

export default MiddleStep;
