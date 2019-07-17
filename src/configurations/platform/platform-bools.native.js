import { Platform } from "react-native";
import { isIphoneX } from "react-native-device-detection";

const platformBools = {
  isWeb: false,
  isNative: true,
  isAndroid: Platform.OS === "android",
  isIos: Platform.OS === "ios",
  isDesktop: false,
  isMobile: false,
  isIphoneX
};

export default platformBools;
