import styled from "styled-components";
import Button from "../../../../../../../button";

const OriginContainer = styled(Button)`
  display: flex;
  flex-flow: row;
  height: 60px;
  margin-top: ${({ cardSize }) => (cardSize.size === "small" ? 8 : 13)}px;
  margin-right: 15px;
`;

export default OriginContainer;
