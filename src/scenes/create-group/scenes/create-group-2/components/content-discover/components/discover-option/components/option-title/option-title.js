import styled from "styled-components";
import Text from "../../../../../../../../../../components/text";

const OptionTitle = styled(Text)`
  font-size: 24px;
  font-weight: 700;
  color: ${({ selected, theme }) =>
    selected === false ? theme.secondaryColor : theme.fontVariantColor};
  display: flex;
  margin: auto;
  margin-top: 24px;
`;

export default OptionTitle;
