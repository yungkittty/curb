import styled from "styled-components";
import Container from "../../../container";

const InputContainer = styled(Container)`
  width: ${props => {
    switch (props.size) {
      case "modal":
        return 420;
      default:
        return 380;
    }
  }}px;
  position: relative;
  margin-top: 52px;
`;

export default InputContainer;
