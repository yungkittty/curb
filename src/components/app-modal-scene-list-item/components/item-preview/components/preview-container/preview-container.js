import styled from "styled-components";
import Container from "../../../../../container";

const PreviewContainer = styled(Container)`
  text-align: left;
  margin-left: 4px;
  display: flex;
  flex-direction: column;
  flex: 1;

  ${({ titleCentered }) =>
    titleCentered
      ? ` margin-left: 0px;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;`
      : ""};
`;

export default PreviewContainer;
