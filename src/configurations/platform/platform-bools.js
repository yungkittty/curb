import { isAndroid, isIOS as isIos, isDesktop, isTablet, isMobile } from "react-device-detect";

const platformBools = {
  isWeb: true,
  isNative: false,
  isAndroid,
  isIos,
  isDesktop,
  isTablet,
  isMobile,
  isIphoneX: false
};

export default platformBools;
