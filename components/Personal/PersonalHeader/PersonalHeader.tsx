import React from "react";
import { useSelector } from "react-redux";
import {
  Box,
  AspectRatio,
  Image,
  Center,
  NativeBaseProvider,
} from "native-base";

export default function PeronalHeader() {
  const { user } = useSelector((state: any ) => state);

  return (
    <NativeBaseProvider>
      <Box>
        <AspectRatio w="100%" ratio={16 / 9}>
          <Image source={{
            uri: user?.avatar
          }} alt="image" />
        </AspectRatio>
        <Center _text={{
          color: "warmGray.50",
          fontWeight: "700",
          fontSize: "5xl"
        }} position="absolute" bottom="0" px="3" py="1.5">
          {user?.displayName}
        </Center>
      </Box>
    </NativeBaseProvider>
  )
}