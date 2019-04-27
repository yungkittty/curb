import PropTypes from "prop-types";
import styled from "styled-components";
import Container from "../../../container";
import { platformBools } from "../../../../configurations/platform";

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
      // eslint-disable-next-line
      props.isFetchingUser && !props.userAvatar
        ? // eslint-disable-line
          props.placeholderColor
        : !props.userAvatar
        ? props.theme.secondaryVariantColor
        : "transparent"
    };
  `}
  overflow: hidden;
`;

UserContainer.propTypes = {
  isFetchingUser: PropTypes.bool.isRequired,
  userAvatar: PropTypes.string.isRequired,
  size: PropTypes.oneOf(platformBools.isReact ? [60, 100, 200, 320] : [50, 70, 160, 200]).isRequired,
  placeholderColor: PropTypes.string.isRequired
};

export default UserContainer;
