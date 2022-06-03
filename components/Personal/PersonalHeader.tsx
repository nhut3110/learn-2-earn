import React from "react";
import { 
        Box, 
        Heading, 
        AspectRatio, 
        Image, 
        Text, 
        Center, 
        HStack, 
        Stack, 
        NativeBaseProvider, 
        Button, 
        VStack, 
        ScrollView 
      } from "native-base";

export default function PeronalHeader() {
    return (
        <NativeBaseProvider>
                <Box>
                    <AspectRatio w="100%" ratio={16 / 9}>
                        <Image source={{
                        uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
                    }} alt="image" />
                    </AspectRatio>
                    <Center _text={{
                    color: "warmGray.50",
                    fontWeight: "700",
                    fontSize: "5xl"
                    }} position="absolute" bottom="0" px="3" py="1.5">
                        Cuong Lee
                    </Center>
                </Box>
        </NativeBaseProvider>
    )
}