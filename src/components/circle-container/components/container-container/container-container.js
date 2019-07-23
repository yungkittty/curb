import PropTypes from "prop-types";
import styled from "styled-components";
import Container from "../../../container";

const ContainerContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.innerDiameter}px;
  height: ${props => props.innerDiameter}px;
  min-width: ${props => props.innerDiameter}px;
  min-height: ${props => props.innerDiameter}px;
  border-radius: ${props => props.innerDiameter / 2}px;
  ${props => (props.backgroundColor ? `background-color: ${props.backgroundColor};` : "")}
`;

ContainerContainer.defaultProps = {
  backgroundColor: undefined
};

ContainerContainer.propTypes = {
  backgroundColor: PropTypes.string
};

export default ContainerContainer;
