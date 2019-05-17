import styled from "styled-components";
import Text from "../text";

const AppModalSceneTitle = styled(Text).attrs(() => ({ type: "h2", weight: 700, isIntended: true }))`
  padding: 0px 60px;
  padding-top: 12px;
  margin-bottom: 58px;
  text-align: center;
`;

export default AppModalSceneTitle;
