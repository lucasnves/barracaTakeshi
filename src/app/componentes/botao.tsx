import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface infosBotao {
    mensagem: string;
}


export default function botao({mensagem} : infosBotao) {
    return (
        <View style={style.botao}>
            <Text>{mensagem}</Text>
        </View>
    );
}

const style = StyleSheet.create({
    botao: {
        backgroundColor: '#DA0D1E',
    }
})