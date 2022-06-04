import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MarketScreen from "./screens/Market.screen";

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <Drawer.Screen name="Market" component={MarketScreen} />
  );
};

export default App;