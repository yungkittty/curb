import PropTypes from "prop-types";
import styled from "styled-components";
import Container from "../../../container";

const ListOverlay = styled(Container)`
  display: flex;
  flex-grow: 1;
  flex-direction: ${props => (props.horizontal ? "row" : "column")};
  overflow: hidden;
`;

ListOverlay.propTypes = { horizontal: PropTypes.bool.isRequired };

export default ListOverlay;
