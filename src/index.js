import React from "react";
import ReactDOM from "react-dom";
import Root from "./root";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";

// eslint-disable-next-line
ReactDOM.render(<Root />, document.getElementById("root"));
registerServiceWorker();
