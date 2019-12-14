import styled from "styled-components";
import Container from "../../../container";

const FormContainer = styled(Container)`
  width: ${props => {
    switch (props.size) {
      case "modal":
        return 420;
      case "large":
        return 600;
      default:
        return 380;
    }
  }}px;
  position: relative;
  justify-content: center;
  ${({ isNoHeight }) => !isNoHeight && "height: 59px;"}
  ${({ isNoMargin }) => !isNoMargin && "margin-top: 52px;"}
  border-width: 0px 0px 1px 0px;
  border-style: solid;
  border-bottom-color: ${({ theme, error }) => (error ? theme.errorColor : theme.primaryColor)};
`;

export default FormContainer;
