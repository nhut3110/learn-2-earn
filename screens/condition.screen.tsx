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

const ConditionScreen = () => {
    return<Box backgroundColor="#171930" w="100%" h="100%">
        <Icon size={10} as={<Feather name="chevron-left"/>} mt="20" ml="-2"></Icon>
        
        <Text fontSize="3xl" mx={2} mt={"5"} mb="2" color="white">What is Lorem Ipsum?</Text>
        <Text fontSize={"xl"} mx="2" mb="5" color={"white"}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
         standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five 
         centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
         Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </Text>

        <Text fontSize="3xl" mx={2} mt={"1"} mb="2" color="white">What is Lorem Ipsum?</Text>
        <Text fontSize={"xl"} mx="2" mb="10" color={"white"}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
         standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five 
         centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
         Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </Text>
    </Box>
}

export default () => 
  {
    return(
        <NativeBaseProvider>
            <ConditionScreen/>
        </NativeBaseProvider>
    );
  }