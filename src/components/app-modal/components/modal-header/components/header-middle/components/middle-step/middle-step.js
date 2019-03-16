import styled from "styled-components";
import Container from "../../../../../../../container";

const MiddleStep = styled(Container)`
  width: 10px;
  height: 10px;
<<<<<<< HEAD
  margin: 0px 10px;
  border-radius: 5px;
  background-color: ${({ enabled, theme }) =>
    enabled ? theme.primaryColor : theme.secondaryColor};
=======
  margin: 0px 9px;
  border-radius: 5px;
  background-color: ${({ enabled, theme }) =>
    enabled ? theme.secondaryColor : theme.primaryColor};
>>>>>>> d0558f038b1ad2409f7751c2a5eb2a97f11e5d16
`;

export default MiddleStep;
