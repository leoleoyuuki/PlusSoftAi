import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import DrawerRoutes from "./drawer.routes";
import { ImageBackground, StyleSheet } from "react-native";

export default function Routes() {

    const pag = window.location.pathname
    console.log(pag)
    const[main,setMain]= useState(false)


  return (
    <ImageBackground
      style={styles.container}
      source={main ? require("../../assets/bgs/bg1.png"): require("../../assets/bgs/bg2.png")}
    >
      <NavigationContainer>
        <DrawerRoutes />
      </NavigationContainer>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
  }
  )
  