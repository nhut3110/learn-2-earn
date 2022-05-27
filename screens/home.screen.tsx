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
} from "@expo/vector-icons";

import NavBar from '../components/NavBar/NavBar';


const circleLength = 700;
const {width, height} = Dimensions.get('window');
const R = circleLength/(2 * Math.PI);
    
export default function HomeScreen() {
  // const progress = useSharedValue(0)

  return (
    <NativeBaseProvider>

      <Box width="100%" alignSelf="center" backgroundColor="#171930">
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
              
              {/* <Flex width="100%" height="80%" backgroundColor="white" alignSelf="center">
                  <Svg>
                  </Svg>
              </Flex> */}
              {/* <Svg style={styles.container}>
            <Circle
              cx={width/2}
              cy={height/2}
              r={R}
              stroke="#54566E"
              strokeWidth={30}
            />

            <Circle
              cx={width/2}
              cy={height/2}
              r={R}
              stroke="#654EA3"
              strokeWidth={30}
              strokeDasharray={circleLength/2}
              strokeDashoffset={circleLength * 0.75}
            />
          </Svg> */}
              {/* <Flex direction="column">
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
                  h="80%"
                  _contentContainerStyle={{
                    px: "20px",
                    mb: "4",
                    minW: "72"
                }}>
                  <VStack flex="1" space={4} alignItems="center">
                    <Center w="100%" h="20" bg="indigo.300" rounded="md" shadow={3} />
                    <Center w="100%" h="20" bg="indigo.500" rounded="md" shadow={3} />
                    <Center w="100%" h="20" bg="indigo.700" rounded="md" shadow={3} />
                    <Center w="100%" h="20" bg="indigo.700" rounded="md" shadow={3} />
                    <Center w="100%" h="20" bg="indigo.700" rounded="md" shadow={3} />
                    <Center w="100%" h="20" bg="indigo.700" rounded="md" shadow={3} />
                    <Center w="100%" h="20" bg="indigo.700" rounded="md" shadow={3} />
                    <Center w="100%" h="20" bg="indigo.700" rounded="md" shadow={3} />
                    <Center w="100%" h="20" bg="indigo.700" rounded="md" shadow={3} />
                    <Center w="100%" h="20" bg="indigo.700" rounded="md" shadow={3} />
                    <Center w="100%" h="20" bg="indigo.700" rounded="md" shadow={3} />
                  </VStack>
                </ScrollView>
              </Flex> */}
            <Box h="90%" backgroundColor="#171930"></Box>
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
    marginBottom: -50,
    // marginTop: -50,
  },
});
