import { Platform } from "react-native";
import styled from "styled-components";
import { isIphoneX } from "react-native-device-detection";
import Text from "../../../../../text";
import { windowQueries } from "../../../../configurations/window";

const MessageText = styled(Text).attrs(() => ({ type: "h5", weight: 400 }))`
  color: ${({ theme }) => theme.backgroundColor};
`;

export default MessageText;
