import styled from "styled-components";
import Text from "../../../../../../../../components/text";

const QrTitle = styled(Text).attrs(() => ({ ellipsizeMode: "tail", numberOfLines: 1 }))`
  width: 75%;
  text-align: center;
`;

export default QrTitle;
