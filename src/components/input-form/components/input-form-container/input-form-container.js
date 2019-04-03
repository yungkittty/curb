import styled from "styled-components";
import Container from "../../../container";

const InputFormContainer = styled(Container)`
  width: ${props => {
    switch (props.size) {
      case "modal":
        return 420;
      default:
        return 380;
    }
  }}px;
  position: relative;
  margin-bottom: 52px;
`;

export default InputFormContainer;
