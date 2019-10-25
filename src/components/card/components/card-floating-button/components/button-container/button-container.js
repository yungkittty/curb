import styled from "styled-components";
import withShadow from "../../../../../../hocs/with-shadow";
import Button from "../../../../../button";

const ButtonContainer = styled(Button)`
  position: absolute;
  bottom: -30px;
  right: 25px;
  flex-flow: column;
  background-color: white;
`;

export default withShadow(6)(ButtonContainer);
