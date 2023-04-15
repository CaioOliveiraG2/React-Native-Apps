import * as React from 'react';
import { useState } from 'react';

import { Text, View, StyleSheet,TextInput,Button, } from 'react-native';
import Constants from 'expo-constants';


function App(){

  const [valor1, setValor1] = useState('');
  const [valor2, setValor2] = useState('');
  const [resultado,setResultado] = useState('');
  

function soma(){
const x = Number(valor1) * Number(valor2)
setResultado(x.toString())

}


  return (
  <View style={styles.container}>

  <View style={{alignSelf:'center'}}>
    <Text>Multiplicador de 2 numeros </Text>
  </View>

    <View style={{margin:10}}>
      <TextInput style={{ aligSelf:'center',height: 40, borderColor: 'gray', borderWidth: 1, paddingHorizontal: 10 }} placeholder="Digite um valor"  onChangeText={setValor1} />
    </View>

    <View style={{margin:10}}>
      <TextInput style={{aligSelf:'center',height: 40, borderColor: 'gray', borderWidth: 1, paddingHorizontal: 10 }} placeholder="Digite outro valor" onChangeText={setValor2}/>
    </View>

  <View style={styles.button}>
     <Button title="Calcular" onPress={soma} />
  </View>

    <View style={{margin:10}}>
      <TextInput style={{ aligSelf:'center',height: 40, borderColor: 'gray', borderWidth: 1, paddingHorizontal: 10 }} placeholder="Resultado" editable={false} selectTextOnFocus={false} value={resultado}/>
     </View>

  </View>
  ); 
};

const styles = StyleSheet.create({
   container: {
    flex: 1,
    justifyContent: 'center',
  },
  button:{
    width: 100,
    alignSelf:'center'
  },
  img:{
    width: 150,
    height: 150,
    borderRadius: 100,
    alignSelf:'center',
    marginBottom:0,
    marginTop:120
          }
})


export default App;