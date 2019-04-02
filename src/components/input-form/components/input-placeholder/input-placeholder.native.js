import styled from "styled-components";
import PlaceholderMove from "./components/placeholder-move";
import Text from "../../../text";

const InputPlaceholder = styled(Text)`
  position: absolute;
  color: ${({ theme }) => theme.secondaryColor};
`;

export default PlaceholderMove(InputPlaceholder);
