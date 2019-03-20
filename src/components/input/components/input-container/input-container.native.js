import styled from "styled-components";
import Container from "../../../container";

const InputContainer = styled(Container)`
  width: ${props => {
    switch (props.size) {
      case "modal":
        return 300;
      default:
        return 300;
    }
  }}px;
  position: relative;
  margin-bottom: 38px;
`;

export default InputContainer;
