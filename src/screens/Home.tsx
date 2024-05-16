import React from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";


export default function Home({ navigation }) {
  return (
    <ImageBackground
      source={require("../../assets/bgs/bg1.png")}
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <View>
        <View style={styles.logo}>
          <Image source={require("../../assets/HyperReach.png")} />
        </View>
        <View style={styles.illustration}>
          <Image source={require("../../assets/homeIllustration.png")} />
        </View>
        <View>
          <Text style={styles.title}>
            Tenha a melhor experiência de marketing da sua empresa
          </Text>
        </View>
        <View>
          <Text style={styles.description}>
            Bem-vindo ao nosso aplicativo de hiper personalização para campanhas
            de marketing! Revolucione a forma como você se conecta com seus
            clientes. Com nossa inteligência artificial avançada, criamos
            campanhas altamente personalizadas e eficazes, adaptadas às
            necessidades únicas de cada empresa. Experimente agora e descubra o
            poder da personalização!
          </Text>
        </View>

        <TouchableOpacity
          style={styles.btn }
          onPress={() => navigation.navigate("Login")}>
          <Text style={{ color: "#fff", fontWeight: "bold" }}>Iniciar</Text>
          </TouchableOpacity>
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
  logo: {
    alignItems: "center",
    marginBottom: 16,
  },
  illustration: {
    alignItems: "center",
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    margin: 16,
  },
  description: {
    fontSize: 14,
    textAlign: "center",
    margin: 16,
  },
  btn:{
    backgroundColor: "#F5752D",
    padding: 10,
    borderRadius: 10,
    width: 350,
    height: 45,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 55,
  }
});
