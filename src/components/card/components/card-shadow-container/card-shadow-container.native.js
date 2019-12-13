import styled from "styled-components";
import withShadow from "../../../../hocs/with-shadow";
import Container from "../../../container";

const CardShadowContainer = styled(Container)`
  position: relative;
  border-radius: 8px;
  background-color: white;
`;

export default withShadow(4)(CardShadowContainer);
