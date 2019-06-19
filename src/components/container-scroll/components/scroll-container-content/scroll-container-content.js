import PropTypes from "prop-types";
import styled from "styled-components";
import Container from "../../../container";
import { windowDimensions } from "../../../../configurations/window";

const ScrollContainerContent = styled(Container)`
  display: flex;
  flex-grow: 0;
  flex-shrink: 1;
  flex-direction: ${props => (props.horizontal ? "row" : "column")};
  ${props => (!props.horizontal ? "max-height: 100%;" : "")}
  ${props => (props.horizontal ? "max-width: 100%;" : "")}
  ${props => (!props.showsVerticalScrollIndicator ? `margin-right: -${windowDimensions.scrollBarWidth}px;` : "")}
  ${props => (!props.showsHorizontalScrollIndicator ? `margin-bottom: -${windowDimensions.scrollBarWidth}px;` : "")}
  overflow-y: ${props => (!props.horizontal ? "auto" : "hidden")};
  overflow-x: ${props => (props.horizontal ? "auto" : "hidden")};
  & > * { flex-shrink: 0; }
`;

ScrollContainerContent.propTypes = {
  showsHorizontalScrollIndicator: PropTypes.bool.isRequired,
  showsVerticalScrollIndicator: PropTypes.bool.isRequired,
  horizontal: PropTypes.bool.isRequired
};

export default ScrollContainerContent;
