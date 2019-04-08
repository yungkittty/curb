import _ from "lodash";
import styled from "styled-components";
import Container from "../../../container";

const GroupContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  ${props => `
    width: ${props.size}px;
    height: ${props.size}px;
    border-radius: ${props.size / 2}px;
    background-color ${
      props.isGroupFetching || props.groupAvatarUrl
        ? props.placeholderColor
        : props.theme[`group${_.capitalize(props.groupTheme)}Color`]
    };
  `}
  overflow: hidden;
`;

export default GroupContainer;
