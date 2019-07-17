import styled from "styled-components";
import Button from "../../../../../button";
import Text from "../../../../../text";

const FooterButtonText = styled(Button).attrs(props => ({
  component: Text,
  contentStyle: { color: props.theme.backgroundColor }
}))`
  width: 100%;
  height: 75px;
  background-color: ${props => props.theme.secondaryColor};
`;

export default FooterButtonText;
