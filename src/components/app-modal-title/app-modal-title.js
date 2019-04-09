import styled from "styled-components";
import Text from "../text";

const AppModalTitle = styled(Text).attrs(() => ({ type: "h2", weight: 700 }))`
  padding-top: 12px;
  margin-bottom: 58px;
  text-align: center;
`;

export default AppModalTitle;
