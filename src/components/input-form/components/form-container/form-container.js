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
  margin-bottom: 52px;
  ${({ readOnly }) => readOnly && "padding: 18px 18px 19px 18px;"}
`;

export default FormContainer;
