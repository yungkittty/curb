import styled from "styled-components";
import Button from "../../../../../../../../../general/button";

const ButtonContainer = styled(Button)`
  height: 75px;
  width: 75px;
  float: ${props => props.position};
  box-sizing: border-box;
  padding: 26px;
`;

export default ButtonContainer;
