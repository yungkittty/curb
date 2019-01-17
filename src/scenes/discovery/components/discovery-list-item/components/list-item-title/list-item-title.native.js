import styled from "styled-components";
import Text from "../../../../../../components/text";

const ListItemTitle = styled(Text).attrs(() => ({
  numberOfLines: 1,
  ellipsizeMode: "tail"
}))`
  width: 100px;
  text-align: center;
`;

export default ListItemTitle;
