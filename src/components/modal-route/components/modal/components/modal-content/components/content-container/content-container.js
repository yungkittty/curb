import styled from "styled-components";
import ScrollContainer from "../../../../../../../scroll-container";

const ContentContainer = styled(ScrollContainer).attrs({ id: "modal-content" })`
  width: 200%;
  overflow: hidden;
  display: flex;
  flex: 1;
`;

export default ContentContainer;
