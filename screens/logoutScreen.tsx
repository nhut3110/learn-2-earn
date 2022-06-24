import React from "react";
import { 
        Box, 
        NativeBaseProvider,  
        VStack, 
        Switch,
        Center,
        Text,
        Heading,
        Button
      } from "native-base";

import { Feather } from "@expo/vector-icons";


const LogoutScreen = () => {
    return <Box backgroundColor="#171930" w="100%" h="100%">
    <VStack space={4} alignItems="center" mt="300" >
      <Box w="300" h="220" bg="blue.800" rounded="md" shadow={3}>
        <Heading fontSize="2xl" display="flex" mb="2" color="#FFFFFF" ml="5" mt={"3"}>
            Log Out
        </Heading>
        
        <Text fontSize="lg" color="#FFFFFF" ml="5"my="3">
            Are you sure you want to log out?
        </Text>

        <Button mx={"25"} w="80%" mt="3" fontSize="xl" background="error.700">
        Log Out
        </Button>

        <Button mx={"25"} w="80%" mt="2" fontSize="xl" bg="blue.800" varient="outline">
        Cancel
        </Button>

        <Center>
        </Center>
      </Box>
    </VStack>;
    </Box>
  };

  export default () => 
  {
    return(
        <NativeBaseProvider>
            <LogoutScreen/>
        </NativeBaseProvider>
    );
  }
  