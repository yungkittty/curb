import styled from "styled-components";
import Container from "../../../../../../../container";

const TextDescriptionPlaceholder = styled(Container)`
  margin: 14px 0px;
  width: 100%;
  height: 14px;
  border-radius: 5px;
  background-color: ${props => props.theme.primaryVariantColor};
`;

export default TextDescriptionPlaceholder;
