import styled from "styled-components";
import PlaceholderMove from "./components/placeholder-move";
import Text from "../../../text";

const InputFormPlaceholder = styled(Text)`
  position: absolute;
  width: 100%;
  color: ${({ theme }) => theme.secondaryColor};
`;

export default PlaceholderMove(InputFormPlaceholder);
