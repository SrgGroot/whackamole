import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
//navigation imports
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from './src/library/utils/rootNavigation';
//imports from Amplify library
import { withAuthenticator } from 'aws-amplify-react-native'
//import screens
import Menu from './src/screens/menu';
import Board from './src/library/components/board';

const Stack = createStackNavigator();

class App extends Component {  render() {
    return (
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator>
          <Stack.Screen 
            name="Main Menu" 
            component={Menu} 
            options={{ 
              title: "Main Menu",
              user: this.props.user
            }}
          />
          <Stack.Screen
            name="Whack-A-Mole"
            component={Board}
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