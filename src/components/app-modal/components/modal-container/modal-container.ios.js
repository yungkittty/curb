import styled from "styled-components";
import { isIphoneX } from "react-native-device-detection";
import Container from "../../../container";
import { windowQueries } from "../../../../configurations/window";

const ModalContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-top: ${isIphoneX ? 30 : 20}px;
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
