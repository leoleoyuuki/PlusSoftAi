import React, { useState } from "react";
import { Alert, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import {createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../service/firebaseConfig";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Cadastro({ navigation}) {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmSenha, setConfirmSenha] = useState("");

  function cadastrar() {
    createUserWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert("Usuário cadastrado com sucesso!")
        AsyncStorage.setItem('logged', "true");
        navigation.navigate("Formulario");
        console.log(user)
      })
      .catch((error) => {
        const errorCode = error.code;
        alert(error.message)
        const errorMessage = error.message;
        // ..
      });
  }
  

  return (
    <ImageBackground
      source={require("../../assets/bgs/bg1.png")}
      style={styles.container}
    >
      <View>
        <View>
          <View><Text style={styles.title}>Bem-vindo de volta!</Text></View>
          <View><Text style={styles.subTitle}>Faça seu Cadastro!</Text></View>
        </View>

        <View style={styles.formulario}>
          
          <TextInput style={styles.input} placeholder="Email" 
           value={email} onChangeText={(value)=> setEmail(value)}
          />
          <TextInput style={styles.input} placeholder="Senha" 
           value={senha} onChangeText={(value)=> setSenha(value)}
          />
          <TextInput style={styles.input} placeholder="Confirme a Senha" 
           value={confirmSenha} onChangeText={(value)=> setConfirmSenha(value)}
          />

        </View>


        <View>
          <TouchableOpacity style={styles.btn} onPress={cadastrar}>
            <Text style={{ color: "#fff", fontWeight: "bold" }}>Cadastro</Text>
          </TouchableOpacity>
          <Text style={styles.linkCadastro} onPress={
            () => navigation.navigate("Login")
          
          } >Já tem uma conta? Entre</Text>
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
    marginBottom: 50,
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
    marginTop: 55,
  },
  linkCadastro: {
    textAlign: "center",
    marginTop: 20,
    color: "#F5752D",
  },
});