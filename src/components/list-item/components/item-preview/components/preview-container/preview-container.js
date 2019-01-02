import styled from "styled-components";
import Container from "../../../../../container";

const PreviewContainer = styled(Container)`
  flex: 1;
  text-align: left;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 4px;

  ${({ titleCentered }) =>
    titleCentered
      ? "position: absolute; display: flex; margin-left: 0px; align-items: center; justify-content: center; width: 100%; height: 100%;"
      : null};
`;

export default PreviewContainer;
