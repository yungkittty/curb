import styled from "styled-components";
import Container from "../../../container";

const ImageContainer = styled(Container)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  margin-bottom: 42px;
  border-radius: 100px;
  overflow: hidden;
  border: ${({ border }) => (border ? "1" : "0")}px solid
    ${props => props.theme.secondaryColor};
`;

export default ImageContainer;
