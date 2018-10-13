import styled from "styled-components";
import Button from "../../../../../../../general/button";
import { screenWidthsMedia } from "../../../../../../../../configurations/screen";

const ButtonContainer = styled(Button)`
  background: #bdbdbd;
  border-radius: 30px;
  margin: 0 auto;
  overflow: hidden;
  width: 48px;
  height: 48px;
  margin-bottom: 12px;

  ${screenWidthsMedia.large`
  width: 54px;
  height: 54px;
  margin-bottom: 14px;
  `}
`;

export default ButtonContainer;
