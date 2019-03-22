import styled from "styled-components";
import ButtonContainer from "../../../button-container";

const ImageContainer = styled(ButtonContainer)`
  width: 140px;
  height: 140px;
  margin-bottom: 38px;
  border-radius: 70px;
  overflow: hidden;
  border: ${({ border }) => (border ? "1" : "0")}px solid
    ${props => props.theme.secondaryColor};
`;

export default ImageContainer;
