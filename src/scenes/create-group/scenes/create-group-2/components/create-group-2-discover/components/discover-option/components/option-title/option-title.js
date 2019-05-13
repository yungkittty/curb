import styled from "styled-components";
import Text from "../../../../../../../../../../components/text";

const OptionTitle = styled(Text)`
  color: ${({ selected, theme }) => (selected === false ? theme.secondaryColor : theme.fontVariantColor)};
  margin-top: 24px;
`;

export default OptionTitle;
