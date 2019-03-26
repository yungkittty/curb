import styled from "styled-components";
import Container from "../../../container";

const ImageContainer = styled(Container)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ size }) => (size === "small" ? "200" : "280")}px;
  height: ${({ size }) => (size === "small" ? "225" : "305")}px;
  border-radius: 140px;
`;

export default ImageContainer;
