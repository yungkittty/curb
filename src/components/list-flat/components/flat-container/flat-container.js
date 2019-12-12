import PropTypes from "prop-types";
import styled from "styled-components";
import Container from "../../../container";

const FlatContainer = styled(Container)`
  display: flex;
  position: relative;
  flex-grow: 1;
  flex-shrink: 1;
  flex-direction: ${props => (props.horizontal ? "column" : "row")};
  overflow: hidden;
  ${props => (props.horizontal ? "justify-content: center;" : "")}
`;

FlatContainer.propTypes = { horizontal: PropTypes.bool.isRequired };

export default FlatContainer;
