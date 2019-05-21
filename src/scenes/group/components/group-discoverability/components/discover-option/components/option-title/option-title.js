import styled from "styled-components";
import Text from "../../../../../../../../components/text";

const OptionTitle = styled(Text)`
  margin-top: 24px;
  color: ${({ selected, theme }) => (selected === false ? theme.secondaryColor : theme.fontVariantColor)};
`;

export default OptionTitle;
