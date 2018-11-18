import styled from "styled-components";
import Button from "../../../../../button";
import { screenWidthsMedias } from "../../../../../../configurations/screen";

const ButtonContainer = styled(Button)`
  background: #bdbdbd;
  border-radius: 30px;
  margin: 0 auto;
  overflow: hidden;
  width: 48px;
  height: 48px;
  margin-top: 12px;
  margin-bottom: 12px;

  ${screenWidthsMedias.large`
    width: 54px;
    height: 54px;
    margin-top: 14px;
    margin-bottom: 14px;
  `};
`;

export default ButtonContainer;
