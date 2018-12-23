import styled from "styled-components";
import Text from "../../../../../../../../../../components/text";

const OptionDescription = styled(Text)`
  font-size: 18px;
  font-weight: 400;
  color: ${({ selected, theme }) =>
    selected === false ? theme.secondaryColor : theme.fontVariantColor};
  display: flex;
  margin: auto;
  margin-top: 28px;
  line-height: 1.9;
`;

export default OptionDescription;
