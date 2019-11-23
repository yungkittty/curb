import styled from "styled-components";
import Container from "../../../../../../../container";

const OriginContainer = styled(Container)`
  margin-right: 6px;
  width: 90px;
  margin-top: ${({ isSubtitle }) => (isSubtitle ? 2 : 10)}px;
  margin-right: 5px;
`;

export default OriginContainer;
