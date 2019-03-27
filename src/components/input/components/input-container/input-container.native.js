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
  margin-top: 38px;
  ${({ readOnly }) => readOnly && "padding: 18px 18px 19px 18px;"}
`;

export default InputContainer;
