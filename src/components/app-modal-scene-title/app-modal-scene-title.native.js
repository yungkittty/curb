import styled from "styled-components";
import Text from "../text";

const AppModalSceneTitle = styled(Text).attrs(() => ({ type: "h2", weight: 700 }))`
  padding: 0px 26px;
  padding-top: 8px;
  line-height: 36;
  margin-bottom: 42px;
  text-align: center;
`;

export default AppModalSceneTitle;
