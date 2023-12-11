import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Botao from "../Componentes/Botao";
const Racao = ({ porcentagemRacao }) => {
  const [porcentagem, setPorcentagem] = useState(porcentagemRacao);
  const navigation = useNavigation();

  
  const handleAlimenta = () => {
    alimento: "ração", 
    porcentagem 
  };

  return (
    <View style={styles.container}>
      <Image 
        source={require("C:/Users/igor5/Documents/FACUL/LIEC/Trabalho/comedouroAnimais/assets/pote-racao.png")} 
        style={styles.poteRacao} /> 
      <View style={styles.nivel}>
            <Text style={styles.marcador}> 100</Text> 
        </View>
        <View style={styles.nivelMeio}>
            <Text style={styles.marcador}> 50</Text> 
        </View>
        <View style={styles.nivelBaixo}>
            <Text style={styles.marcador}> 0</Text> 
        </View>
        <View style={styles.barra}>
          <View style={styles.barraProgresso} width={porcentagem} />
        </View>
      <Image 
        source={require("C:/Users/igor5/Documents/FACUL/LIEC/Trabalho/comedouroAnimais/assets/cachorro.png")} 
        style={styles.cachorro} />
      
      <Botao title={"Adicionar mais ração"} handle={() => handleAlimenta({ alimento: "ração", porcentagem })}></Botao>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#F4D03F',

  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 10,
    alignItems:"top"
  },
  barra: {
    width: 100,
    height: 300,
    backgroundColor: "#ccc",
  },
  barraProgresso: {
    backgroundColor: "#2A44FF",

  },
  cachorro: {
    width: 100,
    height: 100,
  },
  poteRacao: {
    width: 50,
    height: 50,
  },
  nivel: {
    width: 100,
    backgroundColor: "transparent",
    flexDirection: "row",
    justifyContent: "flex-start",
    position: "absolute",
    top: 87,
    left: 60,
  },
  nivelMeio: {
    width: 100,
    backgroundColor: "transparent",
    flexDirection: "row",
    justifyContent: "flex-start",
    position: "absolute",
    top: 225,
    left: 70,
  },
  nivelBaixo: {
    width: 100,
    backgroundColor: "transparent",
    flexDirection: "row",
    justifyContent: "flex-start",
    position: "absolute",
    top: 370,
    left: 80,
  },
  marcador:{
    margin: 50,
    position: "absolute",
    marginBottom: 40,
    fontWeight: "bold",
    color: "#464646",
  },
});

export default Racao;
