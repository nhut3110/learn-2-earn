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
        Text
      } from "native-base";

import { Feather } from "@expo/vector-icons";


const PassWordScreen = () => {
    return <Box backgroundColor="#171930" w="100%" h="100%">
    <VStack space={3} mt="6" py="20">
        <FormControl mt="20px" pt="10">
            <FormControl.Label ml="1">Password</FormControl.Label>
            <Input height="52" type="password" backgroundColor="#242547" borderColor="#242547" py={4} placeholder="Enter Password" color="white"/>
        </FormControl>
        
        <FormControl mt="6">
            <FormControl.Label ml="1">New Password</FormControl.Label>
            <Input height="52" type="password" backgroundColor="#242547" borderColor="#242547" py={4} placeholder="Enter Password" color="white"/>
        </FormControl>
        
        <FormControl  mb="30" pt="6">
            <FormControl.Label ml="1">Confirm New Password</FormControl.Label>
            <Input height="52" type="password" backgroundColor="#242547" borderColor="#242547" py={4} placeholder="Enter Password" color="white"/>
        </FormControl>

        <Button mt="2" colorScheme="indigo">
        Updated Password
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

  export default () => 
  {
    return(
        <NativeBaseProvider>
            <PassWordScreen/>
        </NativeBaseProvider>
    );
  }