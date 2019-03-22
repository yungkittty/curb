import styled from "styled-components";
import Text from "../../../../../../../../../../components/text";

const OptionTitle = styled(Text)`
  font-size: 18px;
  font-weight: 700;
  color: ${({ selected, theme }) =>
    selected === false ? theme.secondaryColor : theme.fontVariantColor};
  margin: auto;
  margin-top: 16px;
`;

export default OptionTitle;
