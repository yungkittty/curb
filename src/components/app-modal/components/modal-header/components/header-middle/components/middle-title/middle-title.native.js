import styled from "styled-components";
import Text from "../../../../../../../text";

const MiddleTitle = styled(Text).attrs(() => ({ ellipsizeMode: "tail", numberOfLines: 1 }))`
  margin-left: 75px;
  margin-right: 75px;
  text-align: center;
`;

export default MiddleTitle;
