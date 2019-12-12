import styled from "styled-components";
import Text from "../../../../../../components/text";

const ItemTitle = styled(Text).attrs(() => ({ numberOfLines: 1, ellipsizeMode: "tail" }))`
  margin-bottom: 5px;
`;

export default ItemTitle;
