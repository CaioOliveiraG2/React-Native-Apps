import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Image, Text } from 'react-native';
import styled from 'styled-components/native';

function App() {
  return (
    <View style={styles.container}>
      <ScrollView Vertical={true} showsVerticalScrollIndicator={false}>
        <View style={styles.box1}>
          <Text style={styles.titulo}>Desevolvedor Front End</Text>
          <Text style={styles.subtitulo}>Salario: R$ 1000,00</Text>
          <Text>
            JAVA, ARDUINO, PASCOAL AJAX, BINARIO, GO, PYTHON JÁ TER TRABALHADO
            NA GOOGLE 40 ANOS DE EXPERIÊNCIA 2 NOBEL DA PAZ SABER PILOTAR UM
            FOGUETE NUNCA TER SIDO CORNOCA
          </Text>
          <Text>Contato: Naldo@gmail.com</Text>
        </View>

        <View style={styles.box1}>
          <Text style={styles.titulo}>Desevolvedor Back End</Text>
          <Text style={styles.subtitulo}>Salario: R$ 4000,00</Text>
          <Text>
             no
            REQUISITOS Suporte e programação dos software internos;
            Analisar impactos e causas em sistemas; Elaboração de apresentação;
            Elaboração de documentos técnicos; Organização e estruturação de
            arquivos referentes a área; Prestar suporte ao usuário;
          </Text>
          <Text>Contato: gpt@gmail.com</Text>
        </View>

        <View style={styles.box1}>
          <Text style={styles.titulo}>Tester QA </Text>
          <Text style={styles.subtitulo}>Salario: R$ 2000,00</Text>
          <Text>
            JRealizar a criação e manutenção de novas funcionalidades -
            Automação de testes - Participar desde a idealização e concepção de
            produtos e serviços, até sua entrega e sustentação Experiência em
            desenvolvimento de Softwares e práticas ágeis Conhecimentos em
            NodeJs, HTML, CSS e Javascript
          </Text>
          <Text>Contato: dev@gmail.com</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box1: {
    marginTop: 100,
    height: 200,
    width: 400,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
    borderWidth: 2,
    borderColor: 'black',
  },

  titulo: {
    fontSize: 24,
  },

  subtitulo: {
    fontWeight: 'bold',
  },
});

export default App;
