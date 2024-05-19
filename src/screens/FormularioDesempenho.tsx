import React, { useState } from "react";
import {
  Alert,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";


export default function FormularioDesempenho({ navigation}) {
  
  const [feature1, setFeature1] = useState("");
  const [feature2, setFeature2] = useState("");
  const [feature3, setFeature3] = useState("");
  const [feature4, setFeature4] = useState("");
  const [feature5, setFeature5] = useState("");
  const [feature6, setFeature6] = useState("");

  useFocusEffect(
    React.useCallback(() => {
      async function checkLogin() {
        const logado = await AsyncStorage.getItem("logged");
        if (logado === null) {
          Alert.alert("Faça o login para acessar o App!");
          navigation.navigate("Login");
        }
      }
      checkLogin();
    }, [navigation])
  );

  const handleSubmit = () => {

    const data = {
      feature1,
      feature2,
      feature3,
      feature4,
      feature5,
      feature6,
    };

    axios.post("https://api.fake.com", data)
      .then((response) => {
        console.log(response.data);
        Alert.alert("Dados Inseridos com sucesso!");
        // Navigate to the next screen or perform some action
      })
      .catch((error) => {
        console.error(error);
        Alert.alert("Erro ao enviar Dados!");
      });

  };

  return (
    <ImageBackground source={require("../../assets/bgs/bg2.png")} style={styles.container}>
      <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.openDrawer()} style={{position: "absolute", left: 25, top: 45}} >
        <Ionicons name="menu" size={32} color="#000" />
      </TouchableOpacity>
        <Image source={require("../../assets/icon.png")} style={styles.logo} />
        <Text style={styles.welcomeText}>Bem vindo à plusoft</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.formTitle}>Formulário Empresa</Text>
        <View style={styles.subTitleContainer}>
          <Text style={styles.subTitle}>Dados Empresa</Text>
          <TouchableOpacity>
            <Text style={styles.addButton}>+</Text>
          </TouchableOpacity>
        </View>

        <TextInput
          style={styles.input}
          placeholder="Feature 1"
          value={feature1}
          onChangeText={(value) => setFeature1(value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Feature 2"
          value={feature2}
          onChangeText={(value) => setFeature2(value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Feature 3"
          value={feature3}
          onChangeText={(value) => setFeature3(value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Feature 4"
          value={feature4}
          onChangeText={(value) => setFeature4(value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Feature 5"
          value={feature5}
          onChangeText={(value) => setFeature5(value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Feature 6"
          value={feature6}
          onChangeText={(value) => setFeature6(value)}
        />

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    paddingTop: 70,
    alignItems: "center",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    marginBottom: 10,
  },
  logo: {
    backgroundColor: "#d9d9d9",
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  welcomeText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  form: {
    borderRadius: 10,
    padding: 20,
    marginHorizontal: 20,
    flex: 1,
    justifyContent: "center",
  },
  formTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  subTitleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 16,
    color: "#888",
  },
  addButton: {
    fontSize: 24,
    color: "#F5752D",
  },
  input: {
    backgroundColor: "#fff",
    borderWidth: 1,
    height: 50,
    borderColor: "#ddd",
    padding: 15,
    borderRadius: 20,
    marginVertical: 10,
  },
  submitButton: {
    backgroundColor: "#F5752D",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  submitButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

