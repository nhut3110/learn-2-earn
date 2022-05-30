import React, { useState, useCallback } from "react";
import { Pressable } from "react-native";
import {
  Text,
  Box,
  Center,
  VStack,
  themeTools,
  useTheme,
  useColorMode,
  useColorModeValue,
} from "native-base";
import ThemeToggle from "./theme-toggle";
import AnimatedCheckbox from "./animated-checkbox";
import TaskItem from "./task-item";

export default function TodoMainScreen() {
  const [checked, setChecked] = useState(false);
  const handlePressCheckbox = useCallback(() => {
    setChecked((prev) => !prev);
  }, []);
  return (
    <Center
      _dark={{ bg: "blueGray.900" }}
      _light={{ bg: "blueGray.50" }}
      flex={1}
    >
      <VStack space={5} alignItems="center" w="full">
        <TaskItem
          isDone={checked}
          onToggleCheckbox={handlePressCheckbox}
          subject="Bug cai deo jjj"
        />
        {/* <Box p={10} bg={useColorModeValue("red.500", "yellow.500")}>
          <Text>Hello</Text>
        </Box> */}
        <ThemeToggle />
      </VStack>
    </Center>
  );
}
