import styled from "styled-components";
import Container from "../../../../../../../container";

const MediaContainer = styled(Container)`
  display: flex;
  flex-flow: row;
  height: ${({ cardSize }) => cardSize.contentHeight}px;
  width: ${({ nbOfMediaTypes }) => (nbOfMediaTypes > 0 ? 100 * nbOfMediaTypes : 100)}%;
  transform: translateX(-${({ selectedIndex, nbOfMediaTypes }) => (selectedIndex * 100) / nbOfMediaTypes}%);
`;

export default MediaContainer;
