import React from "react";
import { 
    Box, 
    NativeBaseProvider,  
    VStack, 
    Switch,
    Center,
    Image,
    Input, 
    Button,
    HStack,
    Link,
    Text, 
    Icon,
    ScrollView
  } from "native-base";

import { Feather } from "@expo/vector-icons";

const AboutScreen = () => {
    return <Box backgroundColor="#171930" w="100%" h="100%">
        <Icon size={10} as={<Feather name="chevron-left"/>} mt="20" ml="-2"></Icon>


        <VStack mt="5" h="600px" w="auto" mx="auto">
            <ScrollView 
            showsVerticalScrollIndicator={false}
            maxW="300" 
            h="80">
                <Text fontSize={"3xl"} color="white" mb={"5"}> Front-End</Text>
                
                <Image mb={"5"} size={120} resizeMode={"contain"} borderRadius={100} source={{
                uri: "https://scontent.fdad1-3.fna.fbcdn.net/v/t39.30808-6/279114592_108426068526550_1309824718707238381_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ZOX3nIaxt4AAX-6BBHs&_nc_ht=scontent.fdad1-3.fna&oh=00_AT8ztqy3vVol4oX_GqC6-renGqYqYYHkQMQ4uL7Dn3zufg&oe=62C24E43"
                }} alt="Alternate Text" />

                <Image mb={"5"} size={120} resizeMode={"contain"} borderRadius={100} source={{
                uri: "https://scontent.fdad1-1.fna.fbcdn.net/v/t39.30808-6/257345978_3016139488658112_1723855786200714938_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_ohc=3PH9T-FhQKcAX_00XDF&_nc_ht=scontent.fdad1-1.fna&oh=00_AT8tdxuAQPiPuJDT07oIMnL1WRQ7fna0wajU-1q2gpQADw&oe=62C2A57D"
                }} alt="Alternate Text" />

                <Image mb={"5"} size={120} resizeMode={"contain"} borderRadius={100} source={{
                uri: "https://scontent.fdad1-1.fna.fbcdn.net/v/t1.15752-9/290676653_1009952066339143_1321588359400406901_n.png?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=R0EFm1j2ngEAX9FppQr&_nc_ht=scontent.fdad1-1.fna&oh=03_AVKZ_Y3i7G4cPm95P_9xnErhRqv_VPRvrX2jer6-yTe4dQ&oe=62E2704E"
                }} alt="Alternate Text" />

                <Image mb={"5"} size={120} resizeMode={"contain"} borderRadius={100} source={{
                uri: "https://scontent.fdad1-1.fna.fbcdn.net/v/t1.15752-9/290676653_1009952066339143_1321588359400406901_n.png?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=R0EFm1j2ngEAX9FppQr&_nc_ht=scontent.fdad1-1.fna&oh=03_AVKZ_Y3i7G4cPm95P_9xnErhRqv_VPRvrX2jer6-yTe4dQ&oe=62E2704E"
                }} alt="Alternate Text" />

                <Text fontSize={"3xl"} color="white" mb={"5"}> Back-End</Text>
                
                <Image mb={"5"} size={120} resizeMode={"contain"} borderRadius={100} source={{
                uri: "https://avatars.githubusercontent.com/u/19547873?v=4"
                }} alt="Alternate Text" />

                <Image mb={"5"} size={120} resizeMode={"contain"} borderRadius={100} source={{
                uri: "https://scontent.fdad2-1.fna.fbcdn.net/v/t1.6435-9/166817282_1328287890875647_8544355747828596351_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=6hjUL7G0LvoAX_HRn-f&tn=DW17cZuXaH26jEKN&_nc_ht=scontent.fdad2-1.fna&oh=00_AT8sTjFfhxD-koSY2EAuG3m2L-_4envSwP6e3BK5FydklA&oe=62E3DA2E"
                }} alt="Alternate Text" />
            </ScrollView>
        </VStack>;
    </Box>
}

export default () => 
  {
    return(
        <NativeBaseProvider>
            <AboutScreen/>
        </NativeBaseProvider>
    );
  }