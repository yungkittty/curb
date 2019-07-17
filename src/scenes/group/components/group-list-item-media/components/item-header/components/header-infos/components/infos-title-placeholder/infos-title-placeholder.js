import styled from "styled-components";
import Container from "../../../../../../../../../../components/container";

const InfosTitlePlaceholder = styled(Container)`
  width: 120px;
  height: 14px;
  border-radius: 5px;
  background-color: ${props => props.theme.primaryVariantColor};
`;

export default InfosTitlePlaceholder;
