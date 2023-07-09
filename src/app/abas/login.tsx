import React from 'react';
import Botao from '../componentes/botao'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

function Section(): JSX.Element {
  return (
    <View>

    </View>
  );
}

function App(): JSX.Element {

  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <StatusBar backgroundColor="blue" barStyle="dark-content" />
      <View style={styles.fundo}>
        <Text>login</Text>
        <Botao mensagem='Tudo certo' /> 
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  fundo: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default App;
