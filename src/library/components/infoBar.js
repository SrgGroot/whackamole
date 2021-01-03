import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { color } from 'react-native-reanimated';

export default function InfoBar(props) {
  return (
    <View style={styles.infoBarContainer}>
      <View style={styles.scoreContainer}>
        <Text style={styles.infoBarLabel}>Score: {props.player.score} </Text>
      </View>
      <View style={styles.timeContainer}>
        <Text style={styles.infoBarLabel}>Time: {props.time}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  infoBarContainer: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#579'
  },
  scoreContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 15
  },
  timeContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 15
  },
  infoBarLabel: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff'
  }
});
