import styled from "styled-components";
import Container from "../../../../../container";
import { screenWidthsMedias } from "../../../../../../configurations/screen";

const ModalContainer = styled(Container)`
  elevation: 10;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 2s ease-in-out;
  background: rgba(0, 0, 0, 0);

  ${screenWidthsMedias.large`
    background: rgba(0, 0, 0, 0.25);
  `};
`;

export default ModalContainer;
