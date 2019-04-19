import _ from "lodash";
import PropTypes from "prop-types";
import styled from "styled-components";
import Container from "../../../container";

const GroupContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  ${props => `
    width: ${props.size}px;
    min-width: ${props.size}px;
    height: ${props.size}px;
    min-height: ${props.size}px;
    border-radius: ${props.size / 2}px;
    background-color: ${
      props.isGroupFetching || props.groupAvatar
        ? // eslint-disable-line
          props.placeholderColor
        : props.theme[`group${_.capitalize(props.groupTheme)}VariantColor`]
    };
  `}
  overflow: hidden;
`;

GroupContainer.propTypes = {
  isGroupFetching: PropTypes.bool.isRequired,
  groupAvatar: PropTypes.string.isRequired,
  groupTheme: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["extra-small", "small", "medium", "large"]).isRequired,
  placeholderColor: PropTypes.string.isRequired
};

export default GroupContainer;
