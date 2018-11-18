import styled from "styled-components";
import Container from "../../../../components/container";
import { screenWidthsMedias } from "../../../../configurations/screen";

const PopupContainer = styled(Container)`
  elevation: 10;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  ${screenWidthsMedias.large`
    background: rgba(0, 0, 0, 0.2);
  `};
`;

export default PopupContainer;
