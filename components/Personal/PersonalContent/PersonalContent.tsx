import React from "react";
import { useSelector } from "react-redux";
import {
  Box,
  Text,
  HStack,
  Stack,
  NativeBaseProvider,
  Button,
} from "native-base";

import UserInfo from './UserInfo';
import { makeShorter } from "../../../utils/parser";

export default function PersonalContent() {
  const { user } = useSelector((state: any) => state);

  return (
    <NativeBaseProvider>
      <Box h="100%" mt="-100px" px={3}>
        <Stack space={2}>
          <HStack justifyContent="space-between" h="50px" alignItems="center">
            <Text
              fontSize="md"
              fontWeight="500"
              color="white" >
              {makeShorter(user?.walletCredential?.walletAddress)}
            </Text>
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
          creditsAmount={user?.credit}
          gpaUser={user?.gpa}
          userClass={user?.class}
        />
      </Box>
    </NativeBaseProvider>
  )
}