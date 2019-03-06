import styled from "styled-components";
import Text from "../../../../../../components/text";

const ListItemTitle = styled(Text).attrs(() => ({ ellipsizeMode: "tail", numberOfLines: 1 }))`
  width: 70px;
  text-align: center;
`;

export default ListItemTitle;
