import styled from "styled-components";
import Container from "../../../container";

const ImageContainer = styled(Container)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ size }) => (size === "small" ? "200" : "280")}px;
  height: ${({ size }) => (size === "small" ? "200" : "280")}px;
  border-radius: 140px;
  overflow: hidden;
  cursor: ${({ readOnly }) => (readOnly ? "unset" : "pointer")};
  border: ${({ border }) => (border ? "1" : "0")}px solid
    ${props => props.theme.secondaryColor};
`;

export default ImageContainer;
