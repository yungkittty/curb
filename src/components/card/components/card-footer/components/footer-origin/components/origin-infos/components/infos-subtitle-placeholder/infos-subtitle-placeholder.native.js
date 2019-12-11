import styled from "styled-components";
import Container from "../../../../../../../../../container";

const InfosSubtitlePlaceholder = styled(Container)`
  width: 50px;
  height: 12px;
  border-radius: 5px;
  background-color: ${props => props.theme.primaryVariantColor};
`;

export default InfosSubtitlePlaceholder;
