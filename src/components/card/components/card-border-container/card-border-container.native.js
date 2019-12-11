import styled from "styled-components";
import withShadow from "../../../../hocs/with-shadow";
import Container from "../../../container";

const CardBorderContainer = styled(Container)`
  width: 100%;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  background-color: white;
`;

export default withShadow(4)(CardBorderContainer);
