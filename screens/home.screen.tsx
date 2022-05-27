import React, {useState} from 'react';
import Navigation from '../navigation/home.navigation';
import useColorScheme from '../hooks/useColorScheme';
import Svg, {Circle} from 'react-native-svg';
import { Dimensions, StyleSheet } from 'react-native';
import {useSharedValue} from 'react-native-reanimated';

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
    
export default function HomeScreen() {
  // const progress = useSharedValue(0)

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
              <Flex w="300" h="300" alignSelf="center" my="5">
                <Svg style={styles.container}>
                  <Circle
                  cx={150}
                  cy={150}
                  r={120}
                  stroke="#54566E"
                  strokeWidth={35}/>

                  <Circle
                  cx={150}
                  cy={150}
                  r={120}
                  stroke="#654EA3"
                  strokeWidth={35}
                  strokeDasharray={500}
                  strokeDashoffset={1000 * 0.8}/>
                </Svg>

                <Flex direction="row" alignSelf="center" width="70%">
                  <Icon mb="1" as={<MaterialCommunityIcons name={"moon-full"} />} color="#654EA3" size="5" />
                  <Text color="white">Balance</Text>
                  <Spacer/>
                  <Icon mb="1" as={<MaterialCommunityIcons name={"moon-full"} />} color="#54566E" size="5" />
                  <Text color="white">Spent</Text>
                </Flex>
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
                    px: "20px",
                    mb: "4",
                    minW: "72"
                }}>
                  <VStack flex="1" space={5} alignItems="center" mb="0.5">
                    <Button
                      colorScheme="primary"
                      w="100%" 
                      h="100%"
                      leftIcon={<Icon mb="1" as={<Entypo name="credit"/>} color="white" size = "10"/>}
                      rightIcon={<Icon mb="1" as={<Entypo name="chevron-thin-right"/>} color="white" size = "10"/>}>
                        <Flex direction="row" w="100%" justifyContent="flex-start">
                          <Box mr="10">
                            <Text color='#fff' fontWeight="700">Recieve</Text>
                            <Text color="#54566E">May 11 | From: 0xa7a...</Text>
                          </Box>
                          <Box>
                            <Text color='#fff' fontWeight="600">0.05 ETH</Text>
                            <Text color="#54566E">10:20 AM</Text>
                          </Box>
                        </Flex>
                    </Button>
                  </VStack>
                </ScrollView>
              </Flex>
            </VStack>
          </Box>
        </Center>
      </Box>

      <NavBar/>
    </NativeBaseProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    // width: 400,
    // height: 400,
    alignSelf: 'center',
    backgroundColor: '#171930',
    // marginTop: -50,
  },
});
