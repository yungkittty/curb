import styled from "styled-components";
import Text from "../../../../../../../../../../components/text";

const InfosSubtitle = styled(Text)`
  ${props => (props.isGettingMedia ? `width: 160px;` : "")}
  height: 14px;
  margin-top: 10px;
  border-radius: 5px;
  color: ${props => props.theme.secondaryVariantColor};
  ${props => (props.isGettingMedia ? `background-color: ${props.theme.primaryVariantColor};` : "")}
`;

export default InfosSubtitle;
