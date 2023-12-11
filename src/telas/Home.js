import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Botao from "../Componentes/Botao"

const Home = () => {
  const navigation = useNavigation();
  const handleIrParaAgua = () => {
    navigation.navigate("Agua");
  };

  const handleIrParaRacao = () => {
    navigation.navigate("Racao");
  };
  
  return (
    <View style={estilos.container}>
      <View >
        <Text style={estilos.titulo}>
          Já cuidou do seu pet hoje?
        </Text>
      </View>
      <View>
        <Botao title={"Ração"} handle={handleIrParaRacao}></Botao>
        <Botao title={"Água"} handle={handleIrParaAgua}></Botao>
      </View>
      <Image style={estilos.imagem} source={require("C:/Users/igor5/Documents/FACUL/LIEC/Trabalho/comedouroAnimais/assets/animais.png")} />
    </View>
  );
};

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    alignItems: "center",

  },
  imagem: {
    height: 200,
    width: 300,
    marginTop: 100,
    alignItems: "flex-end",
  }
});

export default Home;
