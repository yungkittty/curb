import styled from "styled-components";
import Text from "../../../../../../../../../../components/text";
import { screenWidthsMedias } from "../../../../../../../../../../configurations/screen";

const OptionDescription = styled(Text)`
  font-size: 14px;
  font-weight: 400;
  color: ${({ selected, theme }) =>
    selected === false ? theme.secondaryColor : theme.fontVariantColor};
  display: flex;
  text-align: center;
  margin: auto;
  margin-top: -16px;
  line-height: 22;

  ${screenWidthsMedias.large`
    font-size: 18px;
    margin-top: 28px;
    line-height: 1.9;
  `}
`;

export default OptionDescription;
