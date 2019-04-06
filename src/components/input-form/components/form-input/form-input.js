import styled from "styled-components";
import Input from "../../../input";

const FormInput = styled(Input)`
  width: 100%;
  border-bottom-width: 1px;
  border-style: solid;
  border-bottom-color: ${({ theme, error }) =>
    error ? theme.errorColor : theme.primaryColor};
`;

export default FormInput;
