import styled from "styled-components";
import Container from "../../../container";

const ImageContainer = styled(Container)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: 140px;
  width: ${({ size }) => (size === "small" ? "200" : "320")}px;
  height: ${({ size }) => (size === "small" ? "225" : "345")}px;
`;

export default ImageContainer;
