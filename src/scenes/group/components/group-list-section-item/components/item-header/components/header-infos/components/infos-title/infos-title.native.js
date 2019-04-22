import styled from "styled-components";
import Text from "../../../../../../../../../../components/text";

/** @todo This is better to define placeholder ! To reproduce ! */

const InfosTitle = styled(Text)`
  ${props =>
    props.isGettingUser
      ? `
        width: 40px;
        height: 14px;
      `
      : ""}
  border-radius: 5px;
  ${props => (props.isGettingUser ? `background-color: ${props.theme.primaryVariantColor};` : "")};
`;

export default InfosTitle;
