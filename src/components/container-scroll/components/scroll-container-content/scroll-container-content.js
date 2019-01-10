import PropTypes from "prop-types";
import styled from "styled-components";
import Container from "../../../container";

const ScrollContainerContent = styled(Container)`
  display: flex;
  flex-direction: ${props => (props.horizontal ? "row" : "column")};
  width: calc(100% ${props => (!props.showsVerticalScrollIndicator ? " + 30px" : "")});
  height: calc(100% ${props => (!props.showsHorizontalScrollIndicator ? " + 30px" : "")});
  ${props => !props.showsVerticalScrollIndicator ? "padding-right: 30px" : ""};
  ${props => !props.showsHorizontalScrollIndicator ? "margin-bottom: -30px" : ""};
  overflow: auto;
`;

ScrollContainerContent.propTypes = {
  showsHorizontalScrollIndicator: PropTypes.bool.isRequired,
  showsVerticalScrollIndicator: PropTypes.bool.isRequired,
  horizontal: PropTypes.bool.isRequired
};

export default ScrollContainerContent;
