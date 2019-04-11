import styled from "styled-components";
import Button from "../../../button";

const ItemContainer = styled(Button)`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 125px;

  background: ${({ backgroundcolor }) => backgroundcolor || "transparent"};
`;

export default ItemContainer;
