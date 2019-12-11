import styled from "styled-components";
import Container from "../../../../../../../container";

const TextDescriptionPlaceholder = styled(Container)`
  display: flex;
  height: 14px;
  border-radius: 5px;
  background-color: ${props => props.theme.primaryVariantColor};
`;

export default TextDescriptionPlaceholder;
