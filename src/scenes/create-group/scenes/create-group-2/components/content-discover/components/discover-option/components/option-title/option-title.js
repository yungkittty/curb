import styled from "styled-components";
import Text from "../../../../../../../../../../components/text";
import { screenWidthsMedias } from "../../../../../../../../../../configurations/screen";

const OptionTitle = styled(Text)`
  font-size: 18px;
  font-weight: 700;
  color: ${({ selected, theme }) =>
    selected === false ? theme.secondaryColor : theme.fontVariantColor};
  margin: auto;
  margin-top: 16px;

  ${screenWidthsMedias.large`
    font-size: 24px;
    margin-top: 24px;
    display: block;
  `}
`;

export default OptionTitle;
