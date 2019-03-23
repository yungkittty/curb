import styled from "styled-components";
import Container from "../../../container";

const ImageContainer = styled(Container)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 280px;
  height: 280px;
  margin-bottom: 60px;
  border-radius: 140px;
  overflow: hidden;
  border: ${({ border }) => (border ? "1" : "0")}px solid
    ${props => props.theme.secondaryColor};
`;

export default ImageContainer;
