import styled from "styled-components";
import Button from "../../../../../../../button";

const ButtonContainer = styled(Button)`
  ${props => (props.hidden === "hidden" ? "display: none" : "")};
  display: flex;
  align-items: center;
  height: 75px;
  background: gray;
`;

export default ButtonContainer;
