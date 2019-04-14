import styled from "styled-components";
import Text from "../text";

const AppModalSceneTitle = styled(Text).attrs(() => ({ type: "h2", weight: 700 }))`
  padding: 0px 60px;
  padding-top: 12px;
  line-height: 1.7;
  margin-bottom: 58px;
  text-align: center;
`;

export default AppModalSceneTitle;
