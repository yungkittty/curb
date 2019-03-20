import PropTypes from "prop-types";
import styled from "styled-components";
import Container from "../../../container";

const ScrollContainerContent = styled(Container)`
  display: flex;
  flex: 1;
  flex-direction: ${props => (props.horizontal ? "row" : "column")};
  width: ${props => (!props.showsVerticalScrollIndicator ? "calc(100% + 30px)" : "100%")};
  height: ${props => (!props.showsHorizontalScrollIndicator ? "calc(100% + 30px)" : "100%")};
  overflow-y: ${props => (!props.horizontal ? "auto" : "hidden")};
  overflow-x: ${props => (props.horizontal ? "auto" : "hidden")};
`;

ScrollContainerContent.propTypes = {
  showsHorizontalScrollIndicator: PropTypes.bool.isRequired,
  showsVerticalScrollIndicator: PropTypes.bool.isRequired,
  horizontal: PropTypes.bool.isRequired
};

export default ScrollContainerContent;
