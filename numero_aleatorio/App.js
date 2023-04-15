import * as React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
    const [number, setnumber] = useState(0);

    function aleatorio(){      
       setnumber(Math.floor(Math.random() * 10));
    }



  return (
    <View style={styles.container}>
     
     <Text>Jogo Nº aleatorio</Text>
     
     <Text>{number}</Text>

      <View style={{width:250}}>
      
        <Button title="Descobrir" onPress={aleatorio} />
      
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
    alignSelf:'center',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
