import styled from "styled-components";
import Container from "../../../../../../../container";

const MiddleDot = styled(Container)`
  background: ${({ theme, enabled }) =>
    enabled ? theme.primaryColor : theme.secondaryColor};
  height: 10px;
  width: 10px;
  margin: 0 9px;
  border-radius: 5px;
`;

export default MiddleDot;
