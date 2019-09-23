import { Dimensions } from "react-native-web";

const windowDimensions = {
  getWidth: () => Dimensions.get("window").width,
  getHeight: () => Dimensions.get("window").height
};

export default windowDimensions;
