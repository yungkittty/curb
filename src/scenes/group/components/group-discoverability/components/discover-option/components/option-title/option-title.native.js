import styled from "styled-components";
import Text from "../../../../../../../../components/text";

const OptionTitle = styled(Text)`
  margin-top: 16px;
  color: ${({ selected, theme }) => (selected === false ? theme.secondaryColor : theme.fontVariantColor)};
`;

export default OptionTitle;
