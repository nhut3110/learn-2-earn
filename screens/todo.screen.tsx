import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppContainer from "@/components/TodoScreen/TodoContainer";
import TodoMainScreen from "@/components/TodoScreen/TodoScreen";
export default function TodoScreen() {
  return (
    <AppContainer>
      <TodoMainScreen />
    </AppContainer>
  );
}
