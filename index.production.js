import { AppRegistry } from "react-native";
// import TestFairy from "react-native-testfairy";
// import Root from "./src/root";
import { name as appName } from "./app.json";

// TestFairy.begin(process.env.TESTFAIRY_SDK_KEY);

const App = () => null;

AppRegistry.registerComponent(appName, () => App);

/** @todo rollback this file + package.json! */
