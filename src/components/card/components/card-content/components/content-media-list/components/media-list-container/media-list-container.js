import styled from "styled-components";
import Container from "../../../../../../../container";

const MediaListContainer = styled(Container)`
  position: absolute;
  display: flex;
  flex-flow: row;
  background: rgba(0, 0, 0, 0.4);
  padding: 8px 4px;
  align-items: center;
  justify-content: center;
  z-index: 1;
  top: 0px;
  left: 0px;
  border-bottom-right-radius: 12px;
`;

export default MediaListContainer;
