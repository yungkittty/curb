import styled from "styled-components";
import Text from "../../../../../text";

const ItemText = styled(Text)`
  color: ${({ theme }) => theme.secondaryColor};
`;

export default ItemText;
