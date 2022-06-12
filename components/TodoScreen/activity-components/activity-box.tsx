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
} from "native-base";
import { Pressable } from "react-native";

interface Props {
  activityName: string;
  owner: string;
  uri?: string;
  description?: string;
  time: string;
  point?: string;
  // handleOnPress: () => void;
}
const ActivityBox = (props: Props) => {
  const { activityName, owner, uri, description, time, point } = props;
  return (
    <Box alignItems="center" position="relative" top={0} left={0}>
      <Box
        maxW="150px"
        h="150px"
        m={2}
        rounded="lg"
        overflow="hidden"
        borderColor="coolGray.200"
        borderWidth="1"
        _dark={{
          borderColor: "coolGray.600",
          backgroundColor: "gray.700",
        }}
        _web={{
          shadow: 2,
          borderWidth: 0,
        }}
        _light={{
          backgroundColor: "gray.50",
        }}
      >
        <Box>
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image
              source={{
                // uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
                uri:
                  uri == ""
                    ? "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
                    : uri,
              }}
              alt="image"
            />
          </AspectRatio>
          <Center
            bg="violet.500"
            _dark={{
              bg: "violet.400",
            }}
            _text={{
              color: "warmGray.50",
              fontWeight: "700",
              fontSize: "xs",
            }}
            position="absolute"
            bottom="0"
            px="3"
            py="1.5"
          >
            {point == "" ? "point" : point}
          </Center>
        </Box>
        {/* <Pressable onPressIn={handleOnPress}> */}
        <Stack p="4" space={1}>
          <Stack space={1}>
            <Heading size="md" ml="-1" isTruncated>
              {activityName}
            </Heading>
            <Text
              fontSize="xs"
              _light={{
                color: "violet.500",
              }}
              _dark={{
                color: "violet.400",
              }}
              fontWeight="500"
              ml="-0.5"
              mt="-1"
            >
              {owner}
            </Text>
          </Stack>
          <Text fontWeight="400" isTruncated numberOfLines={3}>
            {description}
          </Text>
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <Text
                color="coolGray.600"
                _dark={{
                  color: "warmGray.200",
                }}
                fontWeight="400"
              >
                {time}
              </Text>
            </HStack>
          </HStack>
        </Stack>
        {/* </Pressable> */}
      </Box>
    </Box>
  );
};

export default ActivityBox;
