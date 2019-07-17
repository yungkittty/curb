import { isAndroid, isIOS as isIos, isMobile } from "react-device-detect";

const platformBools = {
  isWeb: true,
  isNative: false,
  isAndroid,
  isIos,
  isDesktop: !isMobile,
  isMobile,
  isIphoneX: false
};

export default platformBools;
