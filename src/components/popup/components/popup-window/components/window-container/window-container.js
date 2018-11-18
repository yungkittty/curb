import styled from "styled-components";
import Container from "../../../../../container";
import { screenWidthsMedias } from "../../../../../../configurations/screen";

const WindowContainer = styled(Container)`
  width: 100%;
  height: 100%;
  background: white;
  display: flex;
  flex-flow: column;
  overflow: hidden;

  ${screenWidthsMedias.large`
    width: 700px;
    height: 740px;
    border-radius: 25px;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  `};
`;

export default WindowContainer;
