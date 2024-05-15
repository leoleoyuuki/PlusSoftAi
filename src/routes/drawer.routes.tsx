import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import "react-native-gesture-handler";
import Home from "../screens/Home";
import Login from "../screens/Login";
import { Ionicons } from "@expo/vector-icons";
import { ImageBackground } from "react-native";

const { Screen, Navigator } = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    
      <Navigator
        screenOptions={{
          headerShown: false,
          drawerType: "slide"
        }}
      >
        <Screen
          name="Home"
          component={Home}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
          }}
        />
        <Screen
          name="Login"
          component={Login}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="log-in" size={size} color={color} />
            ),
          }}
        />
      </Navigator>
  );
}
