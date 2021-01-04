import React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
import { Auth } from '@aws-amplify/auth';

export default function Menu({ navigation }) {
  
  return (
    <View style={styles.container}>
      <Text>Welcome to Whack a Mole!</Text>
      <Text>High Scores</Text>
      <View style="styles.scoreBoard">
        
      </View>
      <Button 
        title="Start" 
        onPress={() =>
          navigation.navigate('Whack-A-Mole', { name: 'Whack-A-Mole!' })
        }
      />
      <Button 
        title="Sign Out" 
        onPress={() =>
          Auth.signOut()
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
  },
});
