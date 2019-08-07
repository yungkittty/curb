import { Platform } from "react-native";

const platformBools = {
  isReact: false,
  isReactNative: true,
  isAndroid: Platform.OS === "android",
  isIos: Platform.OS === "ios"
};

export default platformBools;
