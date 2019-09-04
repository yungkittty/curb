import styled from "styled-components";
import Container from "../../../container";

const CardContainer = styled(Container)`
  width: ${({ size }) => {
    switch (size) {
      case "small":
        return 415;
      default:
        return 600;
    }
  }}px;
  border-radius: 12px;
  background: red;
`;

export default CardContainer;
