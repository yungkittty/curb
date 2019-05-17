import styled from "styled-components";
import Text from "../../../../../../../../../../components/text";

const InfosTitle = styled(Text)`
  ${props =>
    !props.userName
      ? `
        width: 120px;
        height: 14px;
      `
      : ""}
  margin-bottom: 10px;
  border-radius: 10px;
  background-color: ${props => (!props.userName ? props.theme.primaryVariantColor : "transparent")};
`;

export default InfosTitle;
