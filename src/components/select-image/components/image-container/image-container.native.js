import styled from "styled-components";
import ButtonContainer from "../../../button-container";

const ImageContainer = styled(ButtonContainer)`
  width: 140px;
  height: 140px;
  margin-bottom: 38px;
  border-radius: 70px;
  border: ${({ border }) => (border ? "0" : "1")}px solid
    ${props => props.theme.secondaryColor};
`;

export default ImageContainer;
