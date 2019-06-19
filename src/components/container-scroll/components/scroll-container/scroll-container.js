import PropTypes from "prop-types";
import styled from "styled-components";
import Container from "../../../container";

const ScrollContainer = styled(Container)`
  display: flex;
  flex-grow: 1;
  flew-shrink: 1;
  flex-direction: ${props => (props.horizontal ? "row" : "column")};
  ${props => (!props.horizontal ? "max-height: 100%;" : "")}
  ${props => (props.horizontal ? "max-width: 100%;" : "")}
  overflow: hidden;
`;

ScrollContainer.propTypes = { horizontal: PropTypes.bool.isRequired };

export default ScrollContainer;
