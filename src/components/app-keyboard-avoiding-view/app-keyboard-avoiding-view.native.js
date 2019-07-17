import React from "react";
import { KeyboardAvoidingView } from "react-native";

const AppKeyboardAvoidingView = WrappedComponent => props => (
  <KeyboardAvoidingView behavior="padding">
    <WrappedComponent {...props} />
  </KeyboardAvoidingView>
);

export default AppKeyboardAvoidingView;
