import styled from "styled-components";
import ButtonContainer from "../../../button-container";

const ImageContainer = styled(ButtonContainer)`
  width: ${({ size }) => (size === "small" ? "150" : "180")}px;
  height: ${({ size }) => (size === "small" ? "150" : "180")}px;
  border-radius: 90px;
  overflow: hidden;
  border: ${({ border }) => (border ? "1" : "0")}px solid
    ${props => props.theme.secondaryColor};
`;

export default ImageContainer;
