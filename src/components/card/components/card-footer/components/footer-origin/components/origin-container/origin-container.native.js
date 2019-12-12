import styled from "styled-components";
import Button from "../../../../../../../button";

const OriginContainer = styled(Button)`
  display: flex;
  flex-direction: column;
  margin-right: 6px;
  width: 90px;
  margin-top: ${({ isSubtitle }) => (isSubtitle ? 4 : 12)}px;
`;

export default OriginContainer;
