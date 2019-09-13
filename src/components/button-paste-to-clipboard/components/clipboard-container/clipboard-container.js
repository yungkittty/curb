import styled from "styled-components";
import ButtonContainer from "../../../button-container";

const ClipboardContainer = styled(ButtonContainer)`
  position: relative;
  padding: 20px 30px;
  padding-left: 60px;
  border-radius: 100px;
  background: ${({ color }) => color};
`;

export default ClipboardContainer;
