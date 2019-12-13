import styled from "styled-components";
import Text from "../../../../../../../../../text";

const InfosTitle = styled(Text).attrs(() => ({
  type: "h5",
  contentStyle: {
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap"
  }
}))`
  margin-bottom: 5px;
`;

export default InfosTitle;
