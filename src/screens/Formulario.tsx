import React from 'react'
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from "@expo/vector-icons";

export default function Formulario({navigation}) {
  return (
    <View>
        <SafeAreaView style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="menu" size={30} color="#000" onPress={() => navigation.openDrawer()} />
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  )
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