import React from "react";

import {
  Box,
  NativeBaseProvider,
  VStack,
  Switch,
  FormControl,
  Input,
  Button,
  HStack,
  Link,
  Text,
  Icon
} from "native-base";

import { Feather } from "@expo/vector-icons";

const UpdatedScreen = () => {
  return <Box backgroundColor="#171930" w="100%" h="100%">

    <Icon size={10} as={<Feather name="chevron-left" />} mt="20" ml="-2">
      <Text fontSize="lg" mt="1">Change Password</Text>
    </Icon>

    <VStack space={3} py="10">
      <FormControl pt="17">
        <FormControl.Label ml="1">Name</FormControl.Label>
        <Input height="52" backgroundColor="#242547" borderColor="#242547" py={4} placeholder="Enter Name" color="white" />
      </FormControl>

      <FormControl mt="1">
        <FormControl.Label ml="1">ID</FormControl.Label>
        <Input height="52" type="password" backgroundColor="#242547" borderColor="#242547" py={4} placeholder="Enter ID" color="white" />
      </FormControl>

      <FormControl mb="30" mt="1">
        <FormControl.Label ml="1">Email</FormControl.Label>
        <Input height="52" backgroundColor="#242547" borderColor="#242547" py={4} placeholder="Enter Email" color="white" />
      </FormControl>

      <Button mt="2" colorScheme="indigo">
        Updated Information
      </Button>
      <HStack mt="4" justifyContent="center">
        <Text fontSize="sm" color="coolGray.600" _dark={{
          color: "warmGray.200"
        }}>
          {" "}
        </Text>

      </HStack>
    </VStack>
  </Box>
};
export default () => {
  return (
    <NativeBaseProvider>
      <UpdatedScreen />
    </NativeBaseProvider>
  );
}