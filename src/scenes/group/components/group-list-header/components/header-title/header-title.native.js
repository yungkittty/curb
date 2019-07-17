import styled from "styled-components";
import Text from "../../../../../../components/text";

const HeaderText = styled(Text).attrs(() => ({ ellipsizeMode: "tail", numberOfLines: 1 }))`
  max-width: 100%;
  margin-top: 30px;
  color: ${props => props.theme.backgroundColor};
`;

export default HeaderText;
