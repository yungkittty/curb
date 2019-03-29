import styled from "styled-components";
import Container from "../../../container";

const ImageContainer = styled(Container)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: 90px;
  width: ${({ size }) => (size === "small" ? "150" : "180")}px;
  height: ${({ size }) => (size === "small" ? "170" : "200")}px;
`;

export default ImageContainer;
