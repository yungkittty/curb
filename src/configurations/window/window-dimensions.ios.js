import { Dimensions } from "react-native";
import { isIphoneX } from "react-native-device-detection";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const windowDimensions = { width: windowWidth, height: windowHeight - (isIphoneX ? 30 : 20) };

export default windowDimensions;
