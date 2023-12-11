import React from "react"
import { TouchableOpacity, StyleSheet, Text } from 'react-native'
import AdicionarAlimento from "./AdicionarAlimento"

const Botao = (props) => {

    return (
        <>
        <TouchableOpacity style={estilos.botao} onPress={props.handle}>
            <Text style={estilos.textoBotao} >{props.title} </Text>
        </TouchableOpacity>
        </>
    ) 

}
export default Botao

const estilos = StyleSheet.create({
    botao: {
        backgroundColor: '#2a9f85',
        paddingVertical: 16,
        borderRadius: 6,
        margin: 15
    },
    textoBotao: {
        textAlign: 'center',
        color: "#fff",
        fontSize: 16,
        width: 300,
        lineHeight: 26,
        margin: 20
    }

})
