import React from 'react';
import { StyleSheet, View } from 'react-native';
import Board from '../library/components/board';

export default function Menu() {
  return (
    <View style={styles.container}>
      <Board/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
  },
});
