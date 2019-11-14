import styled from "styled-components";
import withShadow from "../../../../hocs/with-shadow";
import Container from "../../../container";

const CardBorderContainer = styled(Container)`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  background-color: white;
`;

export default withShadow(4)(CardBorderContainer);
