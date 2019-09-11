import styled from "styled-components";
import Container from "../../../../../../../container";

const OriginContainer = styled(Container)`
  display: flex;
  height: 60px;
  margin-top: ${({ cardSize }) => (cardSize.size === "small" ? 10 : 15)}px;
  padding-right: 15px;
  flex-shrink: 0;
`;

export default OriginContainer;
