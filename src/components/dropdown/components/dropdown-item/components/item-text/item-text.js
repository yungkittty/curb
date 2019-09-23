import styled from "styled-components";
import Text from "../../../../../text";

const ItemText = styled(Text)`
  position: absolute;
  left: 20px;
  color: ${({ theme }) => theme.secondaryVariantColor};
`;

export default ItemText;
