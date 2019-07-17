import { Dimensions, StatusBar } from "react-native";
import { platformBools } from "../platform";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const statusBarHeight = platformBools.isAndroid ? StatusBar.currentHeight : platformBools.isIphoneX ? 30 : 20; // eslint-disable-line

const windowDimensions = { width: windowWidth, height: windowHeight, statusBarHeight };

export default windowDimensions;
