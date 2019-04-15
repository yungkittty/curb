import styled from "styled-components";
import Text from "../text";

const AppModalSceneTitle = styled(Text).attrs(() => ({ type: "h2", weight: 700 }))`
  padding-top: 8px;
  margin-bottom: 42px;
  text-align: center;
`;

export default AppModalSceneTitle;
