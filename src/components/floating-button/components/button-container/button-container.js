import styled from "styled-components";
import Button from "../../../button";
import { screenWidthsMedias } from "../../../../configurations/screen";

const ButtonContainer = styled(Button)`
  elevation: 6;
  position: absolute;
  bottom: 27px;
  right: 27px;
  width: 54px;
  height: 54px;
  border-radius: 30px;
  background: #bdbdbd;

  ${screenWidthsMedias.large`
    box-shadow: 0px 4px 8px -2px rgba(0, 0, 0, 0.4);
  `};
`;

export default ButtonContainer;
