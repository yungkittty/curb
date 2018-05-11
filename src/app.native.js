import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";
import {
  NativeRouter as Router
  // Route,
  // Link
} from "react-router-native";

const styles = StyleSheet.create({
  appContainer: {
    // ...
  }
});

class App extends PureComponent {
  render() {
    return (
      <View style={styles.appContainer}>
        <Router />
      </View>
    );
  }
}

export default App;
