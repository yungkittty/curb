import styled from "styled-components";
import Text from "../../../../../../components/text";

const MediaHeaderText = styled(Text).attrs(() => ({ weight: 600 }))`
  display: flex;
  color: ${({ theme }) => theme.secondaryVariantColor};
  align-items: center;
  margin-left: 5px;
`;

export default MediaHeaderText;
