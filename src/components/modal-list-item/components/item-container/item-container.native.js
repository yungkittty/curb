import styled from "styled-components";
import Button from "../../../button";

const ItemContainer = styled(Button)`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100px;

  background: ${({ backgroundcolor, selected, theme }) =>
    backgroundcolor || (selected ? theme.primaryVariantColor : "transparent")};
`;

export default ItemContainer;
