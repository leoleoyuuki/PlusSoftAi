import React from "react";
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home({ navigation}) {
  return (
    <ImageBackground
      source={require("../../assets/bgs/bg1.png")}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="menu" size={30} color="#000" onPress={() => navigation.openDrawer()} />
        </TouchableOpacity>
      </SafeAreaView>



      <View>
        <Text>Home</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 12,
    marginLeft: 25,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});