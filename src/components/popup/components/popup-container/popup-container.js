import styled from "styled-components";
import Section from "../../../../components/general/section";
import { screenWidthsMedias } from "../../../../configurations/screen";

const PopupContainer = styled(Section)`
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
