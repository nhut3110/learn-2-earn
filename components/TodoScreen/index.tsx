import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MainScreen from "./screens/main-screen";
import ActivityScreen from "./screens/activity-screen";
import Sidebar from "./sidebar";

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Main"
      drawerContent={(props) => <Sidebar {...props} />}
      screenOptions={{
        headerShown: false,
        drawerType: "back",
        overlayColor: "#00000000",
      }}
    >
      <Drawer.Screen name="Todo List" component={MainScreen} />
      <Drawer.Screen name="Activity Board" component={ActivityScreen} />
    </Drawer.Navigator>
  );
};

export default App;
