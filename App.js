import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { withAuthenticator } from 'aws-amplify-react-native';
import { Auth } from '@aws-amplify/auth';
import Menu from './src/screens/menu';
import Game from './src/screens/game';



const Stack = createStackNavigator();

class App extends Component {
  async componentDidMount() {
    const user = await Auth.currentAuthenticatedUser()
    console.log('user:', user)
  }
  render() {
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
  },
});

export default withAuthenticator(App, {
  includeGreetings: true
})