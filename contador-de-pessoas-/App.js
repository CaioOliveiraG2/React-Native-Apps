import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { StyleSheet } from 'react-native';

function App() {
  const [valor, setValor] = useState(0);

  function aumenta() {
    return setValor(valor + 1);
  }

  function diminuir() {
    if (valor > 0) {
      return setValor(valor - 1);
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>Contador de Pessoas</Text>
      <Text style={{ fontSize: 28, color: 'red', textAlign: 'center' }}>
        {valor}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          margin: 15
        }}>
        <Button title="      +      " onPress={aumenta} />
        <Button title="      -      " onPress={diminuir} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  Text: {
    textAlign: 'center',
    fontSize:20
  },
});

export default App;
