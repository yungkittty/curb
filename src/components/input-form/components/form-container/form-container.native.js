import styled from "styled-components";
import Container from "../../../container";

const FormContainer = styled(Container)`
  width: ${props => {
    switch (props.size) {
      case "modal":
        return 300;
      default:
        return 300;
    }
  }}px;
  position: relative;
  margin-bottom: 42px;
  ${({ readOnly }) => readOnly && "padding: 16.5px 18px 16.5px 18px;"}
`;

export default FormContainer;
