import styled from "styled-components";
import Text from "../../../../../../../../components/text";

const MessageTitle = styled(Text).attrs(() => ({ numberOfLines: 1 }))`
  margin-right: 5px;
  color: ${props => props.theme.secondaryVariantColor};
`;

export default MessageTitle;
