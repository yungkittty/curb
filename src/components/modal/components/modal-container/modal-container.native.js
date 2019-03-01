import styled from "styled-components";
import Container from "../../../container";
import { screenWidthsMedias } from "../../../../configurations/screen";

const ModalContainer = styled(Container)`
  width: 100%;
  height: 100%;
  background: ${props => props.theme.backgroundColor};
  display: flex;
  flex-flow: column;
  overflow: hidden;

  ${screenWidthsMedias.large`
    width: 700px;
    height: 740px;
    border-radius: 25px;
    margin: auto;
  `};
`;

export default ModalContainer;
