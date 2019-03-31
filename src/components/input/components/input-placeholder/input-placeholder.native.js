import styled from "styled-components";
import Text from "../../../text";
import PlaceholderMove from "./components/placeholder-move";

const InputPlaceholder = styled(Text)`
  position: absolute;
  width: 100%;
  font-weight: 300;
  color: ${({ theme }) => theme.secondaryColor};
`;

export default PlaceholderMove(InputPlaceholder);
