import PropTypes from "prop-types";
import styled from "styled-components";
import Container from "../../../container";

const ListContainer = styled(Container)`
  display: flex;
  flex-direction: ${props => (props.horizontal ? "row" : "column")};
  width: 100%;
  height: 100%;
  overflow: auto;
`;

ListContainer.propTypes = { horizontal: PropTypes.bool.isRequired };

export default ListContainer;
