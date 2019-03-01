import styled from "styled-components";
import ButtonText from "../../../button-text";

const ModalButtonText = styled(ButtonText).attrs(props => ({
  contentTextStyle: { color: props.theme.backgroundColor } // !
}))`
  width: 100%;
  height: 75px;
  background: ${props => props.theme.secondaryColor};
`;

export default ModalButtonText;
