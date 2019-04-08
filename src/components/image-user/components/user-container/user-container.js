import styled from "styled-components";
import Container from "../../../container";

const UserContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  ${props => `
    width: ${props.size}px;
    height: ${props.size}px;
    border-radius: ${props.size / 2}px;
    background-color ${
      props.isUserFetching || props.userAvatarUrl
        ? // eslint-disable-line
          props.placeholderColor
        : props.theme.secondaryVariantColor
    };
  `}
  overflow: hidden;
`;

export default UserContainer;
