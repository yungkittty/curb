import PropTypes from "prop-types";
import styled from "styled-components";
import Container from "../../../container";

const ScrollContainer = styled(Container)`
  display: flex;
  flex: 1;
  flex-direction: ${props => (props.horizontal ? "row" : "column")};
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

ScrollContainer.propTypes = { horizontal: PropTypes.bool.isRequired };

export default ScrollContainer;
