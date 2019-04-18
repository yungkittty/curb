import styled from "styled-components";
import Container from "../../../container";

const AlertContainer = styled(Container)`
  display: flex;
  z-index: 8;
  flex-flow: column;
  position: absolute;
  right: 0px;
  top: 0px;
  overflow: hidden;
  padding: 30px 30px 0px 0px;
  align-items: center;
  width: 500px;
`;

export default AlertContainer;
