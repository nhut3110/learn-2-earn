import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/login.screen';
import HomeScreen from '../screens/home.screen';
import TabOneScreen from '@/screens/TabOneScreen';
import TabTwoScreen from '@/screens/TabTwoScreen';

const Stack = createNativeStackNavigator();

export default function MainNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{
            header: () => null, 
          }} /> */}
        <Stack.Screen name="Home" component={HomeScreen} />
        {/* <Stack.Screen name="TabTwo" component={TabTwoScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}