import styled from "styled-components";
import Container from "../../../container";

const FormContainer = styled(Container)`
  width: 300px;
  height: 57px;
  position: relative;
  margin-top: 42px;
  border-bottom-width: 1px;
  border-style: solid;
  border-bottom-color: ${({ theme, error }) => (error ? theme.errorColor : theme.primaryColor)};
`;

export default FormContainer;
