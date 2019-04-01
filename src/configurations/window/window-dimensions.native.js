import { Dimensions, Platform, StatusBar } from "react-native";
import { isIphoneX } from "react-native-device-detection";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const statusBarHeight = Platform.OS === "android" ? StatusBar.currentHeight : isIphoneX ? 30 : 20; // eslint-disable-line

const windowDimensions = { width: windowWidth, height: windowHeight - statusBarHeight };

export default windowDimensions;
