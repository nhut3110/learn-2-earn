import React, {useState} from 'react';
import Navigation from '../navigation/home.navigation';
import useColorScheme from '../hooks/useColorScheme';
import Svg, {Circle} from 'react-native-svg';
import { Dimensions, StyleSheet } from 'react-native';

import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
} from 'react-native-reanimated';

import { 
  NativeBaseProvider,
  Box, 
  Text,
  ScrollView, 
  Heading, 
  VStack, 
  Pressable, 
  Icon, 
  Link, 
  Button, 
  HStack, 
  Center,
  Flex,
  Spacer,
} from "native-base";

import { 
  AntDesign,
  MaterialCommunityIcons,
  Entypo,
} from "@expo/vector-icons";

import NavBar from '../components/NavBar/NavBar';
import ProgressBar from '../components/ProgressBar/ProgressBar';
import HistoryButton from '../components/HistoryButton/HistoryButton';
    
export default function HomeScreen() {

  return (
    <NativeBaseProvider>

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
                <Spacer/>
                <Pressable>
                  <Icon mb="1" as={<AntDesign name={"creditcard"} />} color="white" size="8" />
                </Pressable>
                <Pressable>
                  <Icon mb="1" ml="5" as={<AntDesign name={"plus"} />} color="white" size="8" />
                </Pressable>
              </Flex>
              <Flex w="300" h="300" alignSelf="center" mt="5">
                <ProgressBar/>
                
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
                    px:"15px",
                    mb: "4",
                    minW: "72"
                }}>
                  <HistoryButton
                      tsType='Receive'
                      tsDate='April 20'
                      senderId='0xc002869'
                      creditsAmount='0.69'
                      timeStamp='10:30 AM'
                    />
                  
                  <HistoryButton
                      tsType='Receive'
                      tsDate='April 20'
                      senderId='0xc002869'
                      creditsAmount='6.96'
                      timeStamp='10:30 AM'
                    />
                    <HistoryButton
                      tsType='Receive'
                      tsDate='April 20'
                      senderId='0xc002869'
                      creditsAmount='2.5'
                      timeStamp='10:30 AM'
                    />
                    <HistoryButton
                      tsType='Receive'
                      tsDate='April 20'
                      senderId='0xc002869'
                      creditsAmount='5.69'
                      timeStamp='10:30 AM'
                    />
                    <HistoryButton
                      tsType='Receive'
                      tsDate='April 20'
                      senderId='0xc002869'
                      creditsAmount='6.9'
                      timeStamp='10:30 AM'
                    />
                    <HistoryButton
                      tsType='Receive'
                      tsDate='April 20'
                      senderId='0xc002869'
                      creditsAmount='5.33'
                      timeStamp='10:30 AM'
                    />
                    <HistoryButton
                      tsType='Receive'
                      tsDate='April 20'
                      senderId='0xc002869'
                      creditsAmount='6.9'
                      timeStamp='10:30 AM'
                    />
                </ScrollView>
              </Flex>
            </VStack>
          </Box>
        </Center>
      </Box>

      <NavBar/>
      {/* <BottomTabNavigator/> */}
    </NativeBaseProvider>
  );
};


