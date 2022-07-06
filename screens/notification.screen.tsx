import React from "react";
import { 
        Box, 
        NativeBaseProvider,  
        VStack, 
        Switch, 
        Icon
      } from "native-base";

import { Feather } from "@expo/vector-icons";


const NotificationScreen = () => {
    return <Box backgroundColor="#171930" w="100%" h="100%">
      <Icon size={10} as={<Feather name="chevron-left"/>} mt="20" ml="-2"/>
      <VStack alignItems="center" my="100px">
        <Switch size="lg" my="160px" />
      </VStack>;
    </Box>
  };

  export default () => 
  {
    return(
        <NativeBaseProvider>
            <NotificationScreen/>
        </NativeBaseProvider>
    );
  }