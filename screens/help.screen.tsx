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
    Icon,
    Flex
  } from "native-base";

import { Feather } from "@expo/vector-icons";

const HelpScreen = () => {
    return<Box backgroundColor="#171930" w="100%" h="100%">
        <Icon size={10} as={<Feather name="chevron-left"/>} mt="20" ml="-2"></Icon>
        
        <Flex direction="row" mx={"8"} mt="10">
            <Text fontSize={"2xl"} color="white">Address: </Text>
            <Text fontSize={"2xl"} color={"white"}> Foudation VNUK</Text>
        </Flex>

        <Flex direction="row" mx={"8"} mt="5">
            <Text fontSize={"2xl"} color="white">Email: </Text>
            <Text fontSize={"2xl"} color={"white"}>foundation@vnuk.edu.vn</Text>
        </Flex>
    </Box>
}
export default () => 
  {
    return(
        <NativeBaseProvider>
            <HelpScreen/>
        </NativeBaseProvider>
    );
  }