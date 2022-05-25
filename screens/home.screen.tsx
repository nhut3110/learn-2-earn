import React from 'react';
import Navigation from '../navigation/home.navigation';
import useColorScheme from '../hooks/useColorScheme';
import { 
  NativeBaseProvider, 
} from "native-base";

import NavBar from '../components/NavBar/NavBar';

export default function LoginScreen() {
  return (
    <NativeBaseProvider>
      <NavBar/>
    </NativeBaseProvider>
  );
}
