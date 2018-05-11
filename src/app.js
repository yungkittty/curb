import React, { PureComponent } from "react";
import {
  BrowserRouter as Router
  // Route,
  // Link
} from "react-router-dom";

const styles = {
  appContainer: {
    // ...
  }
};

class App extends PureComponent {
  render() {
    return (
      <div style={styles.appContainer}>
        <Router />
      </div>
    );
  }
}

export default App;
