import styled from "styled-components";
import Container from "../../../../../container";

const ContentContainer = styled(Container).attrs({ id: "modal-content" })`
  overflow: hidden;
  width: 200%;
  flex: 1;
  flex-direction: row;
  display: flex;
`;

export default ContentContainer;
