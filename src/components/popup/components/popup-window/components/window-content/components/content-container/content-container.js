import styled from "styled-components";
import Section from "../../../../../../../general/section";

const ContentContainer = styled(Section)`
  overflow-y: scroll;
  flex: 1;

  // Fix to hide scrollbar
  width: calc(100% + 18px);
  padding-right: 18px;
`;

export default ContentContainer;
