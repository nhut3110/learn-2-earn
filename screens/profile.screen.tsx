import React from "react";
import { useSelector } from "react-redux";
import {
  NativeBaseProvider,
  ScrollView,
  Box,
  Text
} from "native-base";
import PersonalHeader from '../components/Personal/PersonalHeader/PersonalHeader'
import PersonalContent from '../components/Personal/PersonalContent/PersonalContent'
import UserInventoryButton from '../components/Personal/UserInventory/UserInventoryButton'
import InventoryItemScreen from "../components/Personal/InventoryItem";

export const PersonalScreen = (props: any) => {
  const { user } = useSelector((state: any ) => state);
  
  return (
    <NativeBaseProvider>
      <Box bg="#171930" h="100%" w="100%">
        <PersonalHeader />
        <PersonalContent />
        <Box position="absolute" bottom="0" px="5px">
          <Text
            ml="10px"
            fontSize="2xl"
            fontWeight="600"
            color="#FFFFFF">
            Inventory
          </Text>
          <Box mt="5px" ml="10px">
            <ScrollView
              h="150px"
              showsVerticalScrollIndicator={false}
            >
              <UserInventoryButton
                uri='https://i.pinimg.com/564x/e9/d4/97/e9d49723d00cbb642dd0817db861af84.jpg'
                nameItem='Parking ticket'
                stockItem={4}
                datePurchased='25/05/2022'
                useItemQR='https://baergbryce.files.wordpress.com/2011/09/1.jpeg' 
                onClick={() => {
                  console.log("onclick item");
                  props?.navigation?.navigate("InventoryItemScreen")
                }}/>
              <UserInventoryButton
                uri='https://sc04.alicdn.com/kf/U0c6c7fa9609d4ecda336bfd114d6a3f0o.jpeg'
                nameItem='Pepsi'
                stockItem={2}
                datePurchased='22/05/2022'
                useItemQR='https://baergbryce.files.wordpress.com/2011/09/1.jpeg'
                onClick={() => {
                  console.log("onclick item");
                  props?.navigation?.navigate("InventoryItemScreen")
                }}
              />
              <UserInventoryButton
                uri='https://i.pinimg.com/564x/e9/d4/97/e9d49723d00cbb642dd0817db861af84.jpg'
                nameItem='1 hour use MetalShop'
                stockItem={3}
                datePurchased='16/05/2022'
                useItemQR='https://baergbryce.files.wordpress.com/2011/09/1.jpeg'
                onClick={() => {
                  console.log("onclick item");
                  props?.navigation?.navigate("InventoryItemScreen")
                }}
              />
            </ScrollView>
          </Box>
        </Box>
      </Box>
    </NativeBaseProvider>
  )
}

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function MainNavigation() {
  return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Personal" component={PersonalScreen} />
        <Stack.Screen name="InventoryItemScreen" component={InventoryItemScreen} />
      </Stack.Navigator>
  );
}
