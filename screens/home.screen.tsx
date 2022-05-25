import React, {useState} from 'react';
import Navigation from '../navigation/home.navigation';
import useColorScheme from '../hooks/useColorScheme';
import Svg, {Circle} from 'react-native-svg';
import { Dimensions } from 'react-native';
import {useSharedValue} from 'react-native-reanimated';

import { 
  NativeBaseProvider,
} from "native-base";

import NavBar from '../components/NavBar/NavBar';


const circleLength = 1000;
const {width, height} = Dimensions.get('window');
const R = circleLength/(2 * Math.PI);
    
export default function HomeScreen() {
  // const progress = useSharedValue(0)

  return (
    <NativeBaseProvider>
      <Svg>
        <Circle
          cx={width/2}
          cy={height/2}
          r={R}
          stroke="#000000"
          strokeWidth={30}
        />

        <Circle
          cx={width/2}
          cy={height/2}
          r={R}
          stroke="#654EA3"
          strokeWidth={30}
          strokeDasharray={circleLength/2}
          strokeDashoffset={circleLength * 0.5}
        />
      </Svg>
      <NavBar/>
    </NativeBaseProvider>
  );
}
