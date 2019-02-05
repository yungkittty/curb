import PropTypes from "prop-types";
import styled from "styled-components";
import Container from "../../../container";

const ScrollContainer = styled(Container)`
  display: flex;
  flex-direction: ${props => (props.horizontal ? "row" : "column")};
  flex-grow: 1;
  flex-shrink: 1;
  overflow: hidden;
`;

ScrollContainer.propTypes = { horizontal: PropTypes.bool.isRequired };

export default ScrollContainer;
