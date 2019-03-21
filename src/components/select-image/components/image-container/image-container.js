import styled from "styled-components";
import ButtonContainer from "../../../button-container";

const ImageContainer = styled(ButtonContainer)`
  width: 200px;
  height: 200px;
  margin-bottom: 42px;
  border-radius: 100px;
  ${({ readOnly }) => readOnly && "cursor: unset;"}
  border: ${({ border }) => (border ? "0" : "1")}px solid
    ${props => props.theme.secondaryColor};
`;

export default ImageContainer;
