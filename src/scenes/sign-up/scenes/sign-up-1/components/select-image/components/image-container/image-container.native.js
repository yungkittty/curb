import styled from "styled-components";
import ButtonContainer from "../../../../../../../../components/button-container";

const ImageContainer = styled(ButtonContainer)`
  width: 140px;
  height: 140px;
  margin-bottom: 38px;
  border-radius: 70px;
  border: 1px solid ${props => props.theme.secondaryColor};
`;

export default ImageContainer;
