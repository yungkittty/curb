import styled from "styled-components";
import Button from "../../../button";

const ItemContainer = styled(Button)`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 125px;

  background: ${({ backgroundcolor, selected, theme }) =>
    backgroundcolor || (selected ? theme.primaryVariantColor : "transparent")};

  ${({ disabled }) => disabled && "cursor: default;"}

  &:hover {
    background: ${({ theme, backgroundcolor, disabled }) =>
      !disabled ? !backgroundcolor && theme.primaryVariantColor : null};
  }
`;

export default ItemContainer;
