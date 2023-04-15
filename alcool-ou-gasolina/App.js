import * as React from 'react';
import { useState } from 'react';

import { Text, View, StyleSheet, TextInput, Button, Image } from 'react-native';
import Constants from 'expo-constants';

function App() {
  let img =
    'https://static.vecteezy.com/ti/vetor-gratis/p1/3660695-ilustracao-de-posto-de-gasolina-vetor.jpg';
  const [valor1, setValor1] = useState('');
  const [valor2, setValor2] = useState('');
  const [resultado, setResultado] = useState('');

  function calculo() {
    const x = Number(valor1) / Number(valor2);
    console.log(x);
    if (x < 0.7) {
      setResultado('cana-de-açúcar é o melhor para abastecer');
    } else if (x > 0.7) {
      setResultado('Gasolina é o melhor para abastecer');
    }
  }

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: img,
        }}
        style={styles.img}
      />
      <View style={{ alignSelf: 'center' }}>
        <Text>Alcool ou Gasolina</Text>
      </View>

      <View style={{ margin: 10 }}>
        <Text>Preço Alcool</Text>
        <TextInput
          style={{
            aligSelf: 'center',
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            paddingHorizontal: 10,
          }}
          placeholder="Digite um valor"
          onChangeText={setValor1}
        />
      </View>

      <View style={{ margin: 10 }}>
        <Text>Preço Gasolina</Text>
        <TextInput
          style={{
            aligSelf: 'center',
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            paddingHorizontal: 10,
          }}
          placeholder="Digite outro valor"
          onChangeText={setValor2}
        />
      </View>

      <View style={styles.button}>
        <Button title="Calcular" onPress={calculo} />
      </View>

      <View style={{ margin: 10 }}>
        <TextInput
          style={{
            aligSelf: 'center',
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            paddingHorizontal: 10,
          }}
          placeholder="Resultado"
          editable={false}
          selectTextOnFocus={false}
          value={resultado}
        />
      </View>

      <View>
        <Text style={{ margin: 10, fontWeight: 'bold' }}>Descrição</Text>
        <Text style={{ margin: 10 }}>
          O cálculo básico para se descobrir se o álcool é vantajoso ou não em
          relação à gasolina é simples. Basta dividir o preço do litro do etanol
          pelo da gasolina. Se o resultado for inferior a 0,7, o derivado da
          cana-de-açúcar é o melhor para abastecer. Se for maior que 0,7, então
          a gasolina é melhor.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  button: {
    width: 100,
    alignSelf: 'center',
  },
});

export default App;
