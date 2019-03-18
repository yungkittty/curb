import styled from "styled-components";
import ButtonText from "../../../../../button-text";

const FooterButtonText = styled(ButtonText).attrs(props => ({ contentTextStyle: { color: props.theme.backgroundColor } }))`
  width: 100%;
  height: 75px;
  background-color: ${props => props.theme.secondaryColor};
`;

export default FooterButtonText;
