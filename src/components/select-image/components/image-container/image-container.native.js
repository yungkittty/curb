import styled from "styled-components";
import Container from "../../../container";

const ImageContainer = styled(Container)`
  width: ${({ size }) => (size === "small" ? "150" : "180")}px;
  height: ${({ size }) => (size === "small" ? "170" : "200")}px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 90px;
`;

export default ImageContainer;
