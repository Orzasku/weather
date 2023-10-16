import { StyleSheet, Text, View } from 'react-native';
import Weather from "./weather";
import Position from './position';
import { useEffect, useState } from 'react';

export default function App() {

  return (
      <View style={styles.container}>
      <Position />
    </View>
); 

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: "bold",
    fontSize: 16
  }
});
