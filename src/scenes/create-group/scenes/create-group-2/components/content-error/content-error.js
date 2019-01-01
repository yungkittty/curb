import styled from "styled-components";
import Text from "../../../../../../components/text";
import { screenWidthsMedias } from "../../../../../../configurations/screen";

const ContentError = styled(Text)`
  position: absolute;
  font-size: 14px;
  color: ${({ theme }) => theme.errorColor};
  margin: auto;
  margin-top: 44px;

  ${screenWidthsMedias.medium`
    font-size: 16px;
  `}
`;

export default ContentError;
