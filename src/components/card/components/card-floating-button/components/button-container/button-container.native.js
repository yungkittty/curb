import styled from "styled-components";
import withShadow from "../../../../../../hocs/with-shadow";
import Button from "../../../../../button";

const ButtonContainer = styled(Button)`
  position: absolute;
  top: ${({ cardSize: { floatingTopPosition } }) => floatingTopPosition}px;
  right: 20px;
  flex-flow: column;
  background: white;
`;

export default withShadow(4)(ButtonContainer);
