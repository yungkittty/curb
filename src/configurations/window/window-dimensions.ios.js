import { Dimensions, NativeModules } from "react-native";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const windowDimensions = { width: windowWidth, height: windowHeight };

// https://stackoverflow.com/a/49718504

const { StatusBarManager } = NativeModules;

StatusBarManager.getHeight(({ height: statusBarHeight }) => { windowDimensions.height -= statusBarHeight });

export default windowDimensions;
