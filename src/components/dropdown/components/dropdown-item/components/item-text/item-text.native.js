import styled from "styled-components";
import Text from "../../../../../text";

const ItemText = styled(Text).attrs(() => ({ type: "h5" }))`
  position: absolute;
  left: 16px;
  color: ${({ theme }) => theme.secondaryVariantColor};
`;

export default ItemText;
