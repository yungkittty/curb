import styled from "styled-components";
import Text from "../text";

// min-width: max-content;

const ListSectionHeaderCircleText = styled(Text).attrs(() => ({ type: "h3", weight: 500 }))`
  margin-bottom: 60px;
`;

export default ListSectionHeaderCircleText;
