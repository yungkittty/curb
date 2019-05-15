import { TouchableWithoutFeedback } from "react-native";
import styled from "styled-components";
import { platformBools } from "../../../../../../../../configurations/platform";

const OverlayContainer = styled(TouchableWithoutFeedback)`
  position: absolute;
  z-index: 6;
  width: 100%;
  height: 100%;
  ${platformBools.isAndroid ? "elevation: 6;" : ""}
`;

export default OverlayContainer;
