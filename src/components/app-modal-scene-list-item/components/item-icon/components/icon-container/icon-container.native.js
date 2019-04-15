import styled from "styled-components";
import Container from "../../../../../container";

const IconContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ icon }) => (icon ? "80" : "20")}px;
`;

export default IconContainer;
