import { Platform } from "react-native";
import { isTablet, isPhone as isMobile, isIphoneX } from "react-native-device-detection";

const platformBools = {
  isWeb: false,
  isNative: true,
  isAndroid: Platform.OS === "android",
  isIos: Platform.OS === "ios",
  isDesktop: false,
  isMobile,
  isTablet,
  isIphoneX
};

export default platformBools;
