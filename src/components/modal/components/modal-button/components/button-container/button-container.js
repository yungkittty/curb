import styled from "styled-components";
import Button from "../../../../../button";

const ButtonContainer = styled(Button)`
  ${props => (props.hidden === "hidden" ? "display: none" : "")};
  display: flex;
  align-items: center;
  height: 75px;
  background: ${props => (props.loading ? "#BDBDBD" : "#828282")};
`;

export default ButtonContainer;
