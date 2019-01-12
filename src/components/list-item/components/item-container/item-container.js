import styled from "styled-components";
import Button from "../../../button";
import { screenWidthsMedias } from "../../../../configurations/screen";

const ItemContainer = styled(Button)`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100px;

  background: ${({ backgroundColor, selected, theme }) =>
    backgroundColor || (selected ? theme.pimaryVariantColor : "transparent")};

  ${screenWidthsMedias.medium`
    height: 125px;

    ${({ disabled }) => disabled && "cursor: default;"}
    
    &:hover {
      background: ${({ theme, backgroundColor, disabled }) =>
        !disabled ? !backgroundColor && theme.pimaryVariantColor : null};
    }
  `}
`;

export default ItemContainer;
