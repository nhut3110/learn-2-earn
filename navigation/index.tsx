import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/login.screen';
import HomeScreen from '../screens/home.screen';
import FinalScreen from '@/screens/final.screen';
import NotificationScreen from '@/screens/Notification.screen';
import passswordScreen from '@/screens/passswordScreen';
import logoutScreen from '@/screens/logoutScreen';

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
          
          {/* <Stack.Screen 
          name="Final" 
          component={FinalScreen}
          options={{
            header: () => null, 
          }}/> */}
          
          {/* <Stack.Screen 
          name="Final" 
          component={NotificationScreen}
          options={{
            header: () => null, 
          }}/> */}

          <Stack.Screen 
          name="passwordScreen" 
          component={passswordScreen}
          options={{
            header: () => null, 
          }}/>

          {/* <Stack.Screen 
          name="logoutScreen" 
          component={logoutScreen}
          options={{
            header: () => null, 
          }}/> */}
          
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}