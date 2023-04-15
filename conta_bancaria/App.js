import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  Switch,
  TextInput,
} from 'react-native';
import Constants from 'expo-constants';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import { useState } from 'react';
// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  const [limite, setLimite] = useState(0);
  const [estado, setEstado] = useState(true);   
  const [nome, setnome] = useState("_____________");
  const [idade, setidade] = useState("0");
  const [estudo, setestudo] = useState('');
  const [sexo, setsexo] = useState('');

    const [limit, setlimit] = useState(0)
    const [name, setname] = useState('');
    const [year, setyear] = useState(0);
    const [study, setstudy] = useState('Ensino Medio completo');
    const [sex, setsex] = useState('Masculino');
    const [nacionalidade, setnacionalidade] = useState('Brasileiro')


  function renderNome() {
    setnome(name)
    setidade(year)
    setLimite(limit)
    setestudo(study);
    setsexo(sex)
    
    if(estado === true){
      setnacionalidade('Brasileiro') 
    }
    else{
      setnacionalidade('Estrangeiro')
    }
    
    
  }

  return (
    <View style={styles.container}> 
      <Text>Abertura de Banco</Text>

      <View >
        <Text>Nome:</Text> 
        <TextInput onChangeText={setname}/>
      </View>

      <View>
        <Text>Idade:</Text>
        
        <TextInput styles={{height: 40, borderColor: 'gray', borderWidth: 1, paddingHorizontal: 10 }} onChangeText={setyear}/>
      </View>

      <View>
        <Text>Sexo:</Text>
        <Picker onValueChange={setsex} selectedValue = {sex}>
          <Picker.Item key={1} value={1} label="Masculino" />
          <Picker.Item key={2} value={2} label="Feminino" />
        </Picker>
      </View>

      <View>
        <Text>Escolaridade:</Text>
        <Picker onValueChange={setstudy} selectedValue = {study}>
          <Picker.Item key={1} value={'Ensino Medio completo'} label="Ensino Medio completo" />
          <Picker.Item key={2} value={"Ensino Medio imcompleto"} label="Ensino Medio imcompleto" />
          <Picker.Item key={3} value={"Ensino Superior completo"} label="Ensino Superior completo" />
          <Picker.Item key={4} value={"Ensino Superior imcompleto"} label="Ensino Superior imcompleto" />
        </Picker>
      </View>

      <View>
        <Text>Limite:</Text>
        <Slider
          minimumValue={0}
          maximumValue={200}
          onValueChange={(limit) => setlimit(limit)}
          value={limit}
          step={1}
        />
        <Text>R$:{limit}</Text>
      </View>

      <View>
        <Text>Brasileiro</Text>
        <Switch value={estado} onValueChange={(estado) => setEstado(estado)} />
      </View>

      <View>
        <Button title="Confirmar" onPress={renderNome} />
      </View>

      <View>
        <Text>Dados Informados:</Text>
      </View>

      <View>
        <Text>Nome: {nome}</Text>
        
      </View>

      <View>
        <Text>Idade: {idade}</Text>
        
      </View>

      <View>
        <Text>Sexo:{sexo}</Text>
      </View>

      <View>
        <Text>Escolaridade: {estudo}</Text>
      </View>

      <View>
        <Text>Limite: R$ {limite}</Text>
      </View>

      <View>
        <Text>Brasileiro:{nacionalidade}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});