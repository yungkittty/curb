import styled from "styled-components";
import ButtonText from "../../../button-text";

const ModalButtonText = styled(ButtonText)`
  width: 100%;
  height: 75px;
  background: ${props => props.theme.secondaryColor};
`;

export default ModalButtonText;
