import styled from "styled-components";
import Container from "../../../container";
import { screenWidthsMedias } from "../../../../configurations/screen";

const ModalContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.backgroundColor};
  overflow: hidden;

  ${screenWidthsMedias.large`
    width: 700px;
    height: 740px;
    border-radius: 25px;
  `};
`;

export default ModalContainer;
