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
import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../service/firebaseConfig";
import { useFocusEffect } from "@react-navigation/native";


export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");


  useFocusEffect(
    React.useCallback(() => {
      async function checkLogin() {
        const logado = await AsyncStorage.getItem("logged");
        if (logado !== null) {
          Alert.alert("Usuário Já Logado!");
          navigation.navigate("Formulario");
        }
      }
      checkLogin();
    }, [navigation])
  );



  const esqueciSenha = async () => {
    await sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Email de reset enviado para: " + email);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const logar = async () => {
    signInWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        AsyncStorage.setItem('logged', "true");
        navigation.navigate("Formulario");
      })
      .catch((error) => {
        const errorCode = error.code;
        alert(error.message);
        const errorMessage = error.message;
      });
  };

  return (
    <ImageBackground
      source={require("../../assets/bgs/bg1.png")}
      style={styles.container}
    >
      <View>
        <View>
          <View>
            <Text style={styles.title}>Bem-vindo de volta!</Text>
          </View>
          <View>
            <Text style={styles.subTitle}>Faça seu Login!</Text>
          </View>
        </View>

        <View style={styles.illustration}>
          <Image source={require("../../assets/loginIllustration.png")} />
        </View>

        <View style={styles.formulario}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={(value) => setEmail(value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            value={senha}
            onChangeText={(value) => setSenha(value)}
          />

          <Text style={styles.esqueceu} onPress={esqueciSenha}>
            Esqueceu sua senha ?
          </Text>
        </View>

        <View>
          <TouchableOpacity style={styles.btn} onPress={logar}>
            <Text style={{ color: "#fff", fontWeight: "bold" }}>Login</Text>
          </TouchableOpacity>
          <Text
            style={styles.linkCadastro}
            onPress={() => navigation.navigate("Cadastro")}
          >
            Não tem uma conta? Increva-se
          </Text>
        </View>
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
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    margin: 16,
  },
  subTitle: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 20,
  },
  illustration: {
    alignItems: "center",
  },
  formulario: {
    marginHorizontal: 50,
  },
  input: {
    backgroundColor: "#fff",
    width: 340,
    marginVertical: 10,
    padding: 10,
    paddingLeft: 20,
    borderRadius: 170,
  },
  esqueceu: {
    textAlign: "center",
    marginVertical: 10,
    color: "#F5752D",
  },
  btn: {
    backgroundColor: "#F5752D",
    padding: 10,
    borderRadius: 10,
    width: 350,
    height: 45,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  linkCadastro: {
    textAlign: "center",
    marginTop: 20,
    color: "#F5752D",
  },
});
