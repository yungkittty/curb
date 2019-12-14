import styled from "styled-components";
import Container from "../../../container";

const FormContainer = styled(Container)`
  width: 300px;
  ${({ isNoHeight }) => !isNoHeight && "height: 57px;"}
  ${({ isNoMargin }) => !isNoMargin && "margin-top: 42px;"}
  position: relative;
  border-bottom-width: 1px;
  border-style: solid;
  border-bottom-color: ${({ theme, error }) => (error ? theme.errorColor : theme.primaryColor)};
`;

export default FormContainer;
