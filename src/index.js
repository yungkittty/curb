import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";

// eslint-disable-next-line
ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
