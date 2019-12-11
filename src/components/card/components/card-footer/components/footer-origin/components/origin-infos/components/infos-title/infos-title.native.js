import styled from "styled-components";
import Text from "../../../../../../../../../text";

const InfosTitle = styled(Text).attrs(() => ({ type: "h6", ellipsizeMode: "tail", numberOfLines: 1 }))`
  margin-bottom: 2px;
`;

export default InfosTitle;
