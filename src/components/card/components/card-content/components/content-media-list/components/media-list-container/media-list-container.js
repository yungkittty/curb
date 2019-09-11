import styled from "styled-components";
import Container from "../../../../../../../container";

const MediaListContainer = styled(Container)`
  position: absolute;
  display: flex;
  background: rgba(0, 0, 0, 0.4);
  padding: 0px 6px;
  height: 35px;
  align-items: center;
  justify-content: center;
  z-index: 2;
  top: 0px;
  left: 0px;
  border-bottom-right-radius: 12px;
`;

export default MediaListContainer;
