import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button} from 'react-native';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      peso: 0,
      altura: 0,
      resultado: 0,
      situacao: ''
    };
    
    this.calcularIMC = this.calcularIMC.bind(this);
  }

  calcularIMC(){
    let p = parseFloat(this.state.peso);
    let a = parseFloat(this.state.altura)/100;
    let imc = p / (a * a);

    let situacao = '';
    if(imc < 18.5){
      situacao = 'Abaixo do peso';
    } else if (imc < 25){
      situacao = 'Peso normal';
    } else if (imc < 30){
      situacao = 'Sobrepeso';
    } else if (imc < 35){
      situacao = 'Obesidade grau I';
    } else if (imc < 40){
      situacao = 'Obesidade grau II';
    } else {
      situacao = 'Obesidade grau III';
    }

    this.setState({
      resultado: imc.toFixed(2),
      situacao: situacao
    });
  }

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.titulo}>Cálculo de IMC</Text>
        
        <TextInput
          style={styles.input}
          keyboardType='numeric'
          placeholder='Digite seu peso (kg)...'
          onChangeText={(valor) => this.setState({peso: valor})}
        />
        
        <TextInput
          style={styles.input}
          keyboardType='numeric'
          placeholder='Digite sua altura (cm)...'
          onChangeText={(valor) => this.setState({altura: valor})}
        />

        <Button title='Calcular IMC' onPress={this.calcularIMC}/>

        <Text style={styles.resultado}>Seu IMC: {this.state.resultado}</Text>
        <Text style={styles.situacao}>{this.state.situacao}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titulo:{
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  input:{
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    paddingLeft: 10,
    borderRadius: 10,
  },
  resultado:{
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20
  },
  situacao:{
    fontSize: 18,
    marginTop: 10
  }
});

export default App;
