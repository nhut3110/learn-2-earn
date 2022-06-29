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

const AboutScreen = () => {
    return <Box backgroundColor="#171930" w="100%" h="100%">
        <Icon size={10} as={<Feather name="chevron-left"/>} mt="20" ml="-2"></Icon>
    </Box>
}