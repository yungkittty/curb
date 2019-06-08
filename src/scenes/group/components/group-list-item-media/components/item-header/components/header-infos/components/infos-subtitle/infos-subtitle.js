import styled from "styled-components";
import Text from "../../../../../../../../../../components/text";
import Container from "../../../../../../../../../../components/container";

const InfosSubtitle = styled(Text).attrs(props => ({ as: !props.mediaDateCreation ? Container : undefined }))`
  ${props => (!props.mediaDateCreation ? `width: 60px; height: 12px;` : "")}
  border-radius: 5px;
  color: ${props => props.theme.secondaryVariantColor};
  background-color: ${props => (!props.mediaDateCreation ? props.theme.primaryVariantColor : "transparent")};
`;

export default InfosSubtitle;
