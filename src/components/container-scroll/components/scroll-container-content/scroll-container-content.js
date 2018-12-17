import styled from "styled-components";
import Container from "../../../container";

const ScrollContainerContent = styled(Container)`
  display: flex;
  flex-direction: ${props => (props.horizontal ? "row" : "column")};
  width: calc(100%${props => (props.showsHorizontalScrollIndicator ? " + 30px" : "")});
  height: calc(100%${props => (props.showsVerticalScrollIndicator ? " + 30px" : "")});
  ${props => (props.showsHorizontalScrollIndicator ? "padding-right: 30px" : "")};
  ${props => (props.showsVerticalScrollIndicator ? "padding-bottom: 30px" : "")};
  overflow: auto;
`;

export default ScrollContainerContent;
