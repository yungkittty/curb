import styled from "styled-components";
import Container from "../../../../../../../../../../components/container";

const InfosSubtitlePlaceholder = styled(Container)`
  width: 60px;
  height: 12px;
  border-radius: 5px;
  background-color: ${props => props.theme.primaryVariantColor};
`;

export default InfosSubtitlePlaceholder;
