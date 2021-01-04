import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
//navigation imports
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//imports from Amplify library
import { withAuthenticator } from 'aws-amplify-react-native'
import { API, graphqlOperation } from 'aws-amplify'
import { Auth } from '@aws-amplify/auth';
//import screens
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
            name="Main Menu" 
            component={Menu} 
            options={{ 
              title: "Main Menu"
            }}
          />
          <Stack.Screen
            name="Whack-A-Mole"
            component={Game}
            options={{  
              title: "Whack-A-Mole"
            }}
          />
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

export default withAuthenticator(App);