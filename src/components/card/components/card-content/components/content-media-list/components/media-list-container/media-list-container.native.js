import styled from "styled-components";
import Container from "../../../../../../../container";

const MediaListContainer = styled(Container)`
  position: absolute;
  display: flex;
  flex-flow: row;
  background: rgba(0, 0, 0, 0.4);
  padding: 4px 2px;
  align-items: center;
  justify-content: center;
  z-index: 2;
  top: 0px;
  left: 0px;
  border-bottom-right-radius: 8px;
`;

export default MediaListContainer;
