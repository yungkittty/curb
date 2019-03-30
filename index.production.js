import { AppRegistry } from "react-native";
// import TestFairy from "react-native-testfairy";
// import Root from "./src/root";
import { name as appName } from "./app.json";

// TestFairy.begin(process.env.TESTFAIRY_SDK_KEY);

AppRegistry.registerComponent(appName, () => () => {
  alert(process.env.REACT_APP_API_URL);
  return null;
});
