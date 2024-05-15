import React from "react";
import { ImageBackground, Text, View } from "react-native";

export default function Cadastro() {
  return (
    <ImageBackground
      source={require("../../assets/bgs/bg1.png")}
      style={{ flex: 1 }}
    >
      <View>
        <Text>Home</Text>
      </View>
    </ImageBackground>
  );
}
