import styled from "styled-components";
import Container from "../../../../../../../container";

const OriginContainer = styled(Container)`
  margin-right: 6px;
  width: 90px;
  margin-top: ${({ isSubtitle }) => (isSubtitle ? 4 : 12)}px;
`;

export default OriginContainer;
