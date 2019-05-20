import React from "react";
import { KeyboardAvoidingView } from "react-native";

const AppKeyboardAvoidingView = WrappedComponent => props => (
  <KeyboardAvoidingView>
    <WrappedComponent {...props} />
  </KeyboardAvoidingView>
);

export default AppKeyboardAvoidingView;
