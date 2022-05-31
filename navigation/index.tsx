import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/login.screen";
import HomeScreen from "../screens/home.screen";
import TodoScreen from "@/screens/activity.screen";

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
        <Stack.Screen
          name="Todo"
          component={TodoScreen}
          options={{
            header: () => null,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
