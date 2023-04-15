import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Image, Text } from 'react-native';
import styled from 'styled-components/native';

function App() {
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.box1}>
          <Image
            style={{ width: 500, height: 500 }}
            source={{
              uri: 'https://www.havan.com.br/media/catalog/product/cache/73a52df140c4d19dbec2b6c485ea6a50/c/e/celular-smartphone-samsung-a53-5g-tela-6-1--8gb-ram-128gb_776212.jpg',
            }}
          />

          <Text>Celular samsung A32</Text>
        </View>

        <View style={styles.box1}>
          <Image
            style={{ width: 500, height: 500 }}
            source={{
              uri: 'https://a-static.mlcdn.com.br/280x210/iphone-11-apple-64gb-product-red-61-12mp-ios/magazineluiza/155610700/7fe7cd29526ec4fc95727aee8e85e5a5.jpg',
            }}
          />

          <Text>Celular iPhone 11 Apple 64GB  A32</Text>
        </View>

         <View style={styles.box1}>
          <Image
            style={{ width: 500, height: 500 }}
            source={{
              uri: 'https://a-static.mlcdn.com.br/800x560/usado-iphone-xr-64gb-preto-muito-bom-trocafone-apple/trocafone/26332/07294d9e2d13bd733fe5ea844277e226.jpeg',
            }}
          />

          <Text> iPhone XR 64GB Preto M</Text>
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
    height: 600,
    width: 500,
        justifyContent: 'center',
    alignItems: 'center',
    margin:40
  },
});

export default App;
