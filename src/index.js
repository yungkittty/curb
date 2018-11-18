import React from "react";
import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Root from "./root";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";

library.add(fas);
ReactDOM.render(<Root />, document.getElementById("root"));
registerServiceWorker();
