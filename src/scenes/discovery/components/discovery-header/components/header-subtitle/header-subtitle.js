import styled from "styled-components";
import Text from "../../../../../../components/text";

const HeaderTitle = styled(Text).attrs(() => ({ type: "h3" }))`
  padding-bottom: 100px;
  color: ${props => props.theme.secondaryColor};
`;

export default HeaderTitle;
