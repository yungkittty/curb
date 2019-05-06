import styled from "styled-components";
import Text from "../../../../../../components/text";

const HeaderText = styled(Text)`
  max-width: 100%;
  margin-top: 40px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: ${props => props.theme.backgroundColor};
`;

export default HeaderText;
