import React from 'react';
import {
  NativeBaseProvider,
  Box,
  Text,
  Icon,
  HStack,
  Center,
  Pressable
} from "native-base";

import {
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import Ionicons from '@expo/vector-icons/Ionicons';

export default function NavBar() {
  const [selected, setSelected] = React.useState(1);
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <Center flex={1}></Center>
        <HStack position="absolute" bottom={0} bg="#0D0F22" alignItems="center" safeAreaBottom shadow={6}>
          <Pressable opacity={selected === 0 ? 1 : 0.5} py="3" flex={1} onPress={() => setSelected(0)}>
            <Center>
              <Icon mb="1" as={<Ionicons name={selected === 0 ? "stats-chart" : "stats-chart-outline"} />} color="white" size="7" />
              <Text color="white" fontSize="12">
                Home
              </Text>
            </Center>
          </Pressable>
          <Pressable opacity={selected === 1 ? 1 : 0.5} py="2" flex={1} onPress={() => setSelected(1)}>
            <Center>
              <Icon mb="1" as={<MaterialCommunityIcons name={selected === 1 ? "cart" : "cart-outline"} />} color="white" size="7" />
              <Text color="white" fontSize="12">
                Market
              </Text>
            </Center>
          </Pressable>
          <Pressable opacity={selected === 2 ? 1 : 0.6} py="2" flex={1} onPress={() => setSelected(2)}>
            <Center>
              <Icon mb="1" as={<Ionicons name={selected === 2 ? "checkmark-circle" : "checkmark-circle-outline"} />} color="white" size="7" />
              <Text color="white" fontSize="12">
                ToDo List
              </Text>
            </Center>
          </Pressable>
          <Pressable opacity={selected === 3 ? 1 : 0.5} py="2" flex={1} onPress={() => setSelected(3)}>
            <Center>
              <Icon mb="1" as={<MaterialCommunityIcons name={selected === 3 ? "account" : "account-outline"} />} color="white" size="7" />
              <Text color="white" fontSize="12">
                Account
              </Text>
            </Center>
          </Pressable>
        </HStack>
      </Center>
    </NativeBaseProvider>
  )
}