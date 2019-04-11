import styled from "styled-components";
import Text from "../text";

const AppModalTitle = styled(Text).attrs(() => ({ type: "h1", weight: 700 }))`
  padding-top: 8px;
  margin-bottom: 42px;
  text-align: center;
`;

export default AppModalTitle;
