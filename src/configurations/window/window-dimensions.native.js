import { Dimensions, StatusBar } from "react-native";
import { platformBools } from "../platform";

const statusBarHeight = platformBools.isAndroid ? StatusBar.currentHeight : platformBools.isIphoneX ? 30 : 20; // eslint-disable-line

const windowDimensions = {
  getWidth: () => Dimensions.get("window").width,
  getHeight: () => Dimensions.get("window").height,
  getStatusBarHeight: () => statusBarHeight
};

export default windowDimensions;
