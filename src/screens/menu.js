import React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
import Game from './game';

export default function Menu() {
  
  return (
    <View style={styles.container}>
      <Text>Hello, this is the menu screen, click this button to start the game</Text>
      <Button title="Start"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
  },
});
