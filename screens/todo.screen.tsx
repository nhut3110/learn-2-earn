import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TodoContainer from "@/components/TodoScreen/TodoContainer";
import TodoMainScreen from "@/components/TodoScreen/TodoScreen";
import TodoAndActivityScreen from "@/components/TodoTest/index";
export default function TodoScreen() {
  return (
    <TodoContainer>
      {/* <TodoMainScreen /> */}
      <TodoAndActivityScreen />
    </TodoContainer>
  );
}
