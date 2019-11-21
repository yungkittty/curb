import styled from "styled-components";
import Text from "../../../../../text";

const ItemText = styled(Text).attrs(() => ({ type: "h5" }))`
  color: ${({ theme }) => theme.secondaryColor};
`;

export default ItemText;
