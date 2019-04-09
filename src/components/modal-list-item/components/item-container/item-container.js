import styled from "styled-components";
import Button from "../../../button";

const ItemContainer = styled(Button)`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 125px;

  background: ${({ backgroundcolor }) => backgroundcolor || "transparent"};

  &:hover {
    ${({ theme, backgroundcolor, disabled }) =>
      // eslint-disable-next-line no-nested-ternary
      !disabled
        ? backgroundcolor
          ? `box-shadow: inset 0px 0px 0px 65px rgba(0, 0, 0, 0.06)`
          : `background: ${theme.primaryVariantColor}`
        : ""};
  }
`;

export default ItemContainer;
