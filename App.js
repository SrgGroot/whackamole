import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Menu from './src/screens/menu';
import Game from './src/screens/game';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Game}
          options={{ title: 'menu' }}
        />
        <Stack.Screen name="Profile" component={Menu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
  },
});
