import styled from "styled-components";
import Button from "../../../../../../../../../general/button";

const ButtonContainer = styled(Button)`
  ${props => props.position}: 0;
  height: 75px;
  width: 75px;
`;

export default ButtonContainer;
