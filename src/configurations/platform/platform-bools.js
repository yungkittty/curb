import { isAndroid, isIOS as isIos, isMobile, isDesktop } from "react-device-detect";

const platformBools = {
  isWeb: true,
  isNative: false,
  isAndroid,
  isIos,
  isDesktop,
  isMobile,
  isIphoneX: false
};

export default platformBools;
