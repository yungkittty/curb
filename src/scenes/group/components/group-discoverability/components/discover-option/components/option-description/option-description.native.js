import styled from "styled-components";
import Text from "../../../../../../../../components/text";

const OptionDescription = styled(Text)`
  color: ${({ selected, theme }) => (selected === false ? theme.secondaryColor : theme.fontVariantColor)};
  display: flex;
  text-align: center;
  margin-top: 16px;
  line-height: 22;
`;

export default OptionDescription;
