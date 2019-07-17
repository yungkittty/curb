import styled from "styled-components";
import Text from "../../../../../../../../components/text";

const OptionDescription = styled(Text)`
  display: flex;
  margin-top: 28px;
  text-align: center;
  color: ${({ selected, theme }) => (selected === false ? theme.secondaryColor : theme.fontVariantColor)};
`;

export default OptionDescription;
