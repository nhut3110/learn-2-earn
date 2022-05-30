import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TodoContainer from "@/components/TodoScreen/TodoContainer";
import TodoMainScreen from "@/components/TodoScreen/TodoScreen";
import MainScreen from "@/components/TodoTest/main-screen";
export default function TodoScreen() {
  return (
    <TodoContainer>
      {/* <TodoMainScreen /> */}
      <MainScreen />
    </TodoContainer>
  );
}
