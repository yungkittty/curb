import styled from "styled-components";
import Text from "../../../../../../../../../../components/text";

const OptionTitle = styled(Text)`
  font-size: 18px;
  color: ${({ selected, theme }) =>
    selected === false ? theme.secondaryColor : theme.fontVariantColor};
  margin-top: 16px;
`;

export default OptionTitle;
