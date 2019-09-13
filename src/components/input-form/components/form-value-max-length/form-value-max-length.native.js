import styled from "styled-components";
import Container from "../../../container";

const FormValueMaxLength = styled(Container)`
  display: flex;
  flex-flow: row;
  position: absolute;
  align-items: center;
  bottom: 20px;
  right: 20px;
  color: ${({ theme }) => theme.secondaryVariantColor};
`;

export default FormValueMaxLength;
