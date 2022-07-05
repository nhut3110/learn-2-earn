import React from "react";
import { ImageSourcePropType } from "react-native";
import { Box, VStack, Heading, Image, useColorModeValue } from "native-base";

interface Props {
  title?: string;
  image?: string;
  children?: React.ReactNode;
}

const Masthead = ({ title, image, children }: Props) => {
  return (
    <VStack h="100px">
      <Image
        position="absolute"
        left={0}
        right={0}
        bottom={0}
        w="full"
        h="100px"
        resizeMode="cover"
        source={{ uri: image }}
        alt="masthead image"
      />
      {children}
      <Box flex={1} />
      <Heading color={"white"} p={6} size="xl">
        {title}
      </Heading>
    </VStack>
  );
};

export default Masthead;