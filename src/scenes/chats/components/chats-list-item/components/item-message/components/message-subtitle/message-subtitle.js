import styled from "styled-components";
import Text from "../../../../../../../../components/text";

const MessageSubtitle = styled(Text).attrs(() => ({ numberOfLines: 1, ellipsizeMode: "tail" }))`
  color: ${props => props.theme.secondaryVariantColor};
`;

export default MessageSubtitle;
