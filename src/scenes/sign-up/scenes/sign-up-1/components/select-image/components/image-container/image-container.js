import styled from "styled-components";
import ButtonContainer from "../../../../../../../../components/button-container";

const ImageContainer = styled(ButtonContainer)`
  width: 200px;
  height: 200px;
  margin-bottom: 42px;
  border-radius: 100px;
  border: 1px solid ${props => props.theme.secondaryColor};
`;

export default ImageContainer;
