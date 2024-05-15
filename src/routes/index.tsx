import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import DrawerRoutes from "./drawer.routes";
import { StyleSheet } from "react-native";

export default function Routes() {


  return (
    <NavigationContainer>
        <DrawerRoutes />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
});
