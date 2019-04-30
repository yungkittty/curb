import styled from "styled-components";
import Container from "../../../container";
import { windowDimensions, windowQueries } from "../../../../configurations/window";

const ModalContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-top: ${windowDimensions.statusBarHeight}px;
  background-color: ${props => props.theme.backgroundColor};
  overflow: hidden;

  ${windowQueries.large`
    width: 700px;
    height: 740px;
    padding-top: 0px;
    border-radius: 25px;
  `};
`;

export default ModalContainer;
