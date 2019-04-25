import styled from "styled-components";
import ButtonContainer from "../../../button-container";

const ItemContainer = styled(ButtonContainer)`
  justify-content: unset;
  position: relative;
  flex-shrink: 0;
  flex-direction: row;
  width: 100%;
  height: 125px;
  background: ${({ backgroundcolor }) => backgroundcolor || "transparent"};
`;

export default ItemContainer;
