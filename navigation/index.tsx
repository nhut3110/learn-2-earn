import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/login.screen';
import HomeScreen from '../screens/home.screen';
import PersonalScreen from '@/components/Personal/PersonalScreen';
import MarketScreen from '@/components/OldMarket/screens/OldMarket.screen';

const Stack = createNativeStackNavigator();

export default function MainNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{
            header: () => null, 
          }} /> */}
        {/* <Stack.Screen
          name="Personal"
          component={PersonalScreen}
          options={{
            header: () => null, 
          }}
        /> */}
        <Stack.Screen
        name="Personal"
        component={PersonalScreen}
        options={{
          header: () => null, 
        }}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}