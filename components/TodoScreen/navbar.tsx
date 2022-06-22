import React, { useCallback } from "react";
import { HStack, IconButton, Box } from "native-base";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { Text, useColorModeValue, Heading } from "native-base";
import ThemeToggle from "./theme-toggle";
interface Props {
  title: string;
}
const NavBar = (props: Props) => {
  const { title } = props;
  const navigation = useNavigation<DrawerNavigationProp<{}>>();
  const handlePressMenuButton = useCallback(() => {
    navigation.openDrawer();
  }, [navigation]);

  return (
    <HStack
      w="full"
      h={30}
      alignItems="center"
      justifyContent="space-between"
      p={4}
      pb={6}
    >
      <Heading color={useColorModeValue("white", "black")} size={"xl"}>
        {title}
      </Heading>
      {/* <IconButton
        onPress={handlePressMenuButton}
        borderRadius={100}
        _icon={{
          as: Feather,
          name: "menu",
          size: 6,
          color: useColorModeValue("black", "white"),
        }}
      /> */}
      {/* <ThemeToggle /> */}
    </HStack>
  );
};

export default NavBar;
