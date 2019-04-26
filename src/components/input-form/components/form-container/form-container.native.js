import styled from "styled-components";
import Container from "../../../container";

const FormContainer = styled(Container)`
  width: ${props => {
    switch (props.size) {
      case "modal":
      case "large":
        return 300;
      default:
        return 300;
    }
  }}px;
  position: relative;
  margin-bottom: 42px;
`;

export default FormContainer;
