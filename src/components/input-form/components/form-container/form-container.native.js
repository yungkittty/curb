import styled from "styled-components";
import Container from "../../../container";

const FormContainer = styled(Container)`
  width: ${props => {
    switch (props.size) {
      case "modal":
        return 300;
      default:
        return 380;
    }
  }}px;
  position: relative;
  height: 64px;
  margin-bottom: 42px;
`;

export default FormContainer;
