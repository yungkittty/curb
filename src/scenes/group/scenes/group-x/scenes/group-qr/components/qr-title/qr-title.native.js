import styled from "styled-components";
import Text from "../../../../../../../../components/text";

const QrTitle = styled(Text).attrs(() => ({ ellipsizeMode: "tail", numberOfLines: 1 }))`
  text-align: center;
`;

export default QrTitle;
