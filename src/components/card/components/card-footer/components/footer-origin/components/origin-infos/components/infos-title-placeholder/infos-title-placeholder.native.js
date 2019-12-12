import styled from "styled-components";
import Container from "../../../../../../../../../container";

const InfosTitlePlaceholder = styled(Container)`
  width: 70px;
  height: 12px;
  border-radius: 4px;
  margin-bottom: 1px;
  background-color: ${({ theme }) => theme.primaryVariantColor};
`;

export default InfosTitlePlaceholder;
