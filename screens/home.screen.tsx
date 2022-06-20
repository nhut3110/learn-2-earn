import React, { useMemo } from 'react';
import {
  NativeBaseProvider,
  Box,
  ScrollView,
  Heading,
  VStack,
  Pressable,
  Icon,
  Center,
  Flex,
  Spacer,
} from "native-base";

import {
  AntDesign,
} from "@expo/vector-icons";

import NavBar from '../components/NavBar/NavBar';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import HistoryButton, { TransactionHistory } from '../components/HistoryButton/HistoryButton';

const LinearGradient = require("expo-linear-gradient").LinearGradient;
const config = {
  dependencies: {
    "linear-gradient": LinearGradient
  }
};

const HomeScreen = () => {
  const historyData = useMemo<TransactionHistory[]>(() => [
    {
      tsType: 'Receive',
      tsDate: 'April 20',
      senderId: '0xa7a28...',
      creditsAmount: 0.69,
      timeStamp: '10:30 AM',
    },
    {
      tsType: 'Receive',
      tsDate: 'April 20',
      senderId: '0xa7a28...',
      creditsAmount: 0.69,
      timeStamp: '10:30 AM',
    },
    {
      tsType: 'Receive',
      tsDate: 'April 20',
      senderId: '0xa7a28...',
      creditsAmount: 0.69,
      timeStamp: '10:30 AM',
    },
    {
      tsType: 'Receive',
      tsDate: 'April 20',
      senderId: '0xa7a28...',
      creditsAmount: 0.69,
      timeStamp: '10:30 AM',
    },
  ], []);

  return (
    <NativeBaseProvider config={config}>
      <Box w="100%" h="100%" alignSelf="center" backgroundColor="#171930">
        <Center w="100%" mt="20">
          <Box w="100%">
            <VStack space={2.5} w="100%">
              <Flex direction="row" px="5">
                <Heading
                  size={"xl"}
                  fontWeight="600"
                  color="#FFFFFF"
                  _dark={{
                    color: "#FFFFFF"
                  }}>Your Credits</Heading>
                <Spacer />
                <Pressable>
                  <Icon mb="1" as={<AntDesign name={"creditcard"} />} color="white" size="8" />
                </Pressable>
                <Pressable>
                  <Icon mb="1" ml="5" as={<AntDesign name={"plus"} />} color="white" size="8" />
                </Pressable>
              </Flex>
              <Flex w="300" h="300" alignSelf="center" mt="5">
                <ProgressBar />

              </Flex>
              <Flex direction="column">
                <Heading
                  px="5"
                  py="5"
                  size={"lg"}
                  fontWeight="600"
                  color="#FFFFFF"
                  _dark={{
                    color: "#FFFFFF"
                  }}>Activity History</Heading>
                <ScrollView
                  maxW="100%"
                  h="80"
                  _contentContainerStyle={{
                    // px: "15px",
                    // px:"15px",
                    mb: "4",
                    minW: "72"
                  }}>
                  {historyData.map((item, index) => (
                    <HistoryButton
                      {...item}
                      key={`history-item-${index}`}
                    />
                  ))}
                </ScrollView>
              </Flex>
            </VStack>
          </Box>
        </Center>
      </Box>
      {/* <NavBar /> */}
    </NativeBaseProvider>
  );
};

export default HomeScreen;


