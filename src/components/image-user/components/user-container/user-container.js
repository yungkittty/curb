import PropTypes from "prop-types";
import styled from "styled-components";
import Container from "../../../container";

const UserContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  ${props => `
    width: ${props.size}px;
    min-width: ${props.size}px;
    height: ${props.size}px;
    min-height: ${props.size}px;
    border-radius: ${props.size / 2}px;
    background-color ${
      props.isUserFetching || props.userAvatar
        ? // eslint-disable-line
          props.placeholderColor
        : props.theme.secondaryVariantColor
    };
  `}
  overflow: hidden;
`;

UserContainer.propTypes = {
  isUserFetching: PropTypes.bool.isRequired,
  userAvatar: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["extra-small", "small", "medium", "large"]).isRequired,
  placeholderColor: PropTypes.string.isRequired
};

export default UserContainer;
