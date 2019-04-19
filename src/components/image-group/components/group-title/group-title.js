import styled from "styled-components";
import Text from "../../../text";

/** @todo prop-types */

const GroupTitle = styled(Text)`
  font-size: ${props => props.X / 2}px;
  user-pointer: none;
  user-select: none;
  color: ${props => props.theme.backgroundColor};
`;

export default GroupTitle;
