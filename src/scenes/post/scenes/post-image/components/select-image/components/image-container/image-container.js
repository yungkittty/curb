import styled from "styled-components";
import ButtonContainer from "../../../../../../../../components/button-container";

const ImageContainer = styled(ButtonContainer)`
  width: 600px;
  height: 400px;
  margin-bottom: 42px;
  border-radius: 30px;
  border: 1px solid ${props => props.theme.secondaryColor};
`;

export default ImageContainer;
