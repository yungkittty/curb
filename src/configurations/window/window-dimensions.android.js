import { Dimensions, StatusBar } from "react-native";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const { currentHeight: statusBarHeight } = StatusBar;

const windowDimensions = { width: windowWidth, height: windowHeight - statusBarHeight };

export default windowDimensions;
