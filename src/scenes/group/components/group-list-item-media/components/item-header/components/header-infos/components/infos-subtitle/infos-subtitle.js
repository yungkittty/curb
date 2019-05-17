import styled from "styled-components";
import Text from "../../../../../../../../../../components/text";

const InfosSubtitle = styled(Text)`
  ${props => (!props.mediaDateCreation ? `width: 60px; height: 12px;` : "")}
  border-radius: 5px;
  color: ${props => props.theme.secondaryVariantColor};
  background-color: ${props => (!props.mediaDateCreation ? props.theme.primaryVariantColor : "transparent")};
`;

export default InfosSubtitle;
