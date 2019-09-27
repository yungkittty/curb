import styled from "styled-components";
import Container from "../../../../../../../container";

const MiddleStep = styled(Container)`
  width: 10px;
  height: 10px;
  margin: 0px 9px;
  border-radius: 5px;
  background-color: ${({ isEnabled, theme }) => (isEnabled ? theme.secondaryColor : theme.primaryColor)};
`;

export default MiddleStep;
