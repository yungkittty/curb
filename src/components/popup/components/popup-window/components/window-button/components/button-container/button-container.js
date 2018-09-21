import styled from "styled-components";
import Button from "../../../../../../../general/button";

const ButtonContainer = styled(Button)`
  display: ${props => props.hidden};
  height: 75px;
  background: gray;
`;

export default ButtonContainer;
