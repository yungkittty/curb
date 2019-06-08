import styled from "styled-components";
import Text from "../../../../../../../../../../components/text";
import Container from "../../../../../../../../../../components/container";

const InfosTitle = styled(Text).attrs(props => ({ as: !props.userName ? Container : undefined }))`
  ${props => (!props.userName ? `width: 120px; height: 14px;` : "")}
  border-radius: 5px;
  background-color: ${props => (!props.userName ? props.theme.primaryVariantColor : "transparent")};
`;

export default InfosTitle;
