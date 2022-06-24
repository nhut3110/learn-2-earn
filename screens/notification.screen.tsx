import React from "react";
import { 
        Box, 
        NativeBaseProvider,  
        VStack, 
        Switch
      } from "native-base";

import { Feather } from "@expo/vector-icons";


const NotificationScreen = () => {
    return <Box backgroundColor="#171930" w="100%" h="100%">
      <VStack alignItems="center" my="200px">
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