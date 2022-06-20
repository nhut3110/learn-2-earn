import React from "react";
import {
  Box,
  Heading,
  Text,
  HStack,
  Stack,
  NativeBaseProvider,
  Button,
  VStack,
  ScrollView,
  Flex
} from "native-base";

import UserInfo from './UserInfo';
import UserInventoryButton from '../UserInventory/UserInventoryButton';

// interface addressWallet {
//     senderId: string, 
// }

export default function PersonalContent() {
  return (
    <NativeBaseProvider>
      <Box h="100%" mt="-120px" px={3}>
        <Stack space={3}>
          <Text
            fontSize="md"
            fontWeight="500"
            color="white" >
            0x77bb...b8E3
            {/* {props.senderId} */}
          </Text>
          <HStack justifyContent="space-between" h="50px">
            <Button w="200px" bg="transparent" borderRadius="50" borderWidth="1" borderColor="coolGray.200">
              <Text fontSize="md"
                color="white"
                fontWeight="700">
                Check your grade
              </Text>
            </Button>
            <Button bg="transparent" justifyContent="center">
              <Text fontSize="3xl"
                color="white"
                fontWeight="500" mt="-15px">
                ...
              </Text>
            </Button>
          </HStack>
          <Text fontWeight="400"
            color="white">
            A studious and team player Computer Science and Engineering sophomore at
            VNUK Institute for Research and Executed Education. and more
          </Text>
        </Stack>
        <UserInfo
          creditsAmount='172'
          gpaUser='3.7'
          userClass='20CSE'
        />
      </Box>
    </NativeBaseProvider>
  )
}