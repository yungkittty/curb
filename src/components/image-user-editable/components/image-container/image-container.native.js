import styled from "styled-components";
import Container from "../../../container";

const ImageContainer = styled(Container)`
  position: relative;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  width: ${({ size }) => (size === "small" ? "150" : "200")}px;
  height: ${({ size }) => (size === "small" ? "170" : "220")}px;
`;

export default ImageContainer;
