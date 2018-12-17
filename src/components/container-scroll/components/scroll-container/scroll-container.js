import styled from "styled-components";
import Container from "../../../container";

const ScrollContainer = styled(Container)`
  display: flex;
  flex-direction: ${props => (props.horizontal ? "row" : "column")};
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export default ScrollContainer;
