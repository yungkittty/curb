import styled from "styled-components";
import withShadow from "../../../../hocs/with-shadow";
import Container from "../../../container";

const CardBorderContainer = styled(Container)`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  flex: 1;
  background-color: white;
`;

export default withShadow(4)(CardBorderContainer);
