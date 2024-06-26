import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import "react-native-gesture-handler";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Cadastro from "../screens/Cadastro";

import FormularioEmpresa from "../screens/FormularioEmpresa";
import FormularioTendencia from "../screens/FormularioTendencia";
import FormularioDesempenho from "../screens/FormularioDesempenho";
import FormularioHistorico from "../screens/FormularioHistorico";
import FormularioComportamento from "../screens/FormularioComportamento";

import { Ionicons } from "@expo/vector-icons";






const { Screen, Navigator } = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    
      <Navigator
        screenOptions={{
          headerShown: false,
          drawerType: "slide"
        }}
      >
        <Screen
          name="Home"
          component={Home}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
          }}
        />
        <Screen
          name="Login"
          component={Login}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="log-in" size={size} color={color} />
            ),
          }}
        />
        <Screen
          name="Cadastro"
          component={Cadastro}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="person-add" size={size} color={color} />
            ),
          }}/>
        <Screen
          name="Formulario"
          component={FormularioEmpresa}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="document-text" size={size} color={color} />
            ),
          }}
        />
        <Screen
          name="FormularioTendencia"
          component={FormularioTendencia}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="document-text" size={size} color={color} />
            ),
          }}
        />
        <Screen
          name="FormularioDesempenho"
          component={FormularioDesempenho}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="document-text" size={size} color={color} />
            ),
          }}
        />
        <Screen
          name="FormularioHistorico"
          component={FormularioHistorico}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="document-text" size={size} color={color} />
            ),
          }}
        />
        <Screen
          name="FormularioComportamento"
          component={FormularioComportamento}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons name="document-text" size={size} color={color} />
            ),
          }}
        />

      </Navigator>
  );
}
