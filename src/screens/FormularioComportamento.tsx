import React, { useState } from "react";
import {
  Alert,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";

export default function FormularioComportamento({ navigation }) {
  const [interacoesPlataforma, setInteracoesPlataforma] = useState("");
  const [frequenciaUso, setFrequenciaUso] = useState("");
  const [feedback, setFeedback] = useState("");
  const [usoRecursosEspecificos, setUsoRecursosEspecificos] = useState("");
  const [empresaId, setEmpresaId] = useState("");


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
      interacoesPlataforma: interacoesPlataforma,
      frequenciaUso: frequenciaUso,
      feedback: feedback,
      usoRecursosEspecificos: usoRecursosEspecificos,
      empresa:{
        id: empresaId
      },
    };

    axios.post("https://localhost:80/comportamento", data)
      .then((response) => {
        console.log(response.data);
        Alert.alert("Dados Inseridos com sucesso!");
      })
      .catch((error) => {
        console.error(error.message);
        Alert.alert("Erro ao enviar Dados!" + error.message);
      });
  };

  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={require("../../assets/bgs/bg2.png")}
        style={styles.header}
      >
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Ionicons name="menu" size={32} color="#000" />
        </TouchableOpacity>
        <View style={{ alignItems: "center", paddingTop: 10 }}>
          <Image
            source={require("../../assets/icon.png")}
            style={styles.logo}
          />
          <Text style={styles.welcomeText}>Bem vindo à plusoft</Text>
        </View>
        <View style={{ opacity: 0, width: "15%" }}></View>
      </ImageBackground>
      <View style={styles.form}>
        <Text style={styles.formTitle}>Formulário Comportamento</Text>
        <View style={styles.subTitleContainer}>
          <Text style={styles.subTitle}>Dados Empresa</Text>
          <TouchableOpacity>
            <Text style={styles.addButton}>+</Text>
          </TouchableOpacity>
        </View>
        
        <TextInput
          style={styles.input}
          placeholder="Interacoes Plataforma"
          onChangeText={(text) => setInteracoesPlataforma(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Frequencia Uso"
          onChangeText={(text) => setFrequenciaUso(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Feedback"
          onChangeText={(text) => setFeedback(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Uso Recursos Especificos"
          onChangeText={(text) => setUsoRecursosEspecificos(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Empresa ID"
          onChangeText={(text) => setEmpresaId(text)}
        />
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    paddingTop: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    marginBottom: 10,
    paddingLeft: 25,
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
    textAlign: "center",
    paddingBottom: 15,
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
