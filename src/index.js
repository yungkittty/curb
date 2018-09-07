import React from "react";
import ReactDOM from "react-dom";
import Root from "./root";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";

ReactDOM.render(<Root />, document.getElementById("root"));
library.add(fas);
registerServiceWorker();
