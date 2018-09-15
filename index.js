import { AppRegistry } from "react-native";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
// import Root from "./src/root";
import App from "./src/app";
import { name as appName } from "./app.json";

library.add(fas);
AppRegistry.registerComponent(appName, () => App);
