import styled from "styled-components";
import ButtonContainer from "../../../button-container";

const ImageContainer = styled(ButtonContainer)`
  width: 180px;
  height: 180px;
  margin-bottom: 20px;
  border-radius: 90px;
  overflow: hidden;
  border: ${({ border }) => (border ? "1" : "0")}px solid
    ${props => props.theme.secondaryColor};
`;

export default ImageContainer;
