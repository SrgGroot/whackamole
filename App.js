import React from 'react';
import { StyleSheet, View } from 'react-native';
import Board from './src/library/components/board';
import InfoBar from './src/library/components/infoBar';

let testdata = {
  "player": {
    "score": 0
  },
  "time": 60   
}

export default function App() {
  return (
    <View style={styles.container}>
      <InfoBar 
        player={testdata.player}
        time={testdata.time}
      />
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
