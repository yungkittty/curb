import styled from "styled-components";
import Container from "../../../../../../../container";

const OriginContainer = styled(Container)`
  display: flex;
  flex-flow: row;
  height: 60px;
  margin-top: ${({ cardSize }) => (cardSize.size === "small" ? 10 : 15)}px;
  margin-right: 15px;
`;

export default OriginContainer;
