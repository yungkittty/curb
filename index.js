import { AppRegistry } from "react-native";
import TestFairy from "react-native-testfairy";
import Root from "./src/root";
import { name as appName } from "./app.json";

if (process.env.NODE_ENV !== "development") TestFairy.begin("SDK-uR7nl8VP");

AppRegistry.registerComponent(appName, () => Root);
