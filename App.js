import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MainNavigator from "./components/navigator/MainNavigator";
import { Provider } from "react-redux";
import { store } from "./store/createStore";

export default function App() {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}
