import { isAndroid, isIos, isTablet, isPhone as isMobile, isIphoneX } from "react-native-device-detection";

const platformBools = {
  isWeb: false,
  isNative: true,
  isAndroid,
  isIos,
  isDesktop: false,
  isMobile,
  isTablet,
  isIphoneX
};

export default platformBools;
