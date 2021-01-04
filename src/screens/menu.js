import React, { Component } from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
import { Auth } from '@aws-amplify/auth';
// imports from Amplify library
import { API, graphqlOperation } from 'aws-amplify'

import { listWhackaMoles } from '../../graphql/queries'

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scores: []
    }
  }

  async componentDidMount() {
    try {
      const WhackaMoleScoreData = await API.graphql(graphqlOperation(listWhackaMoles))
      console.log('WhackaMoleScoreData:', WhackaMoleScoreData.data.listWhackaMoles.items)
      this.setState({
        scores: WhackaMoleScoreData.data.listWhackaMoles.items
      })
    } catch (err) {
      console.log('error fetching scores...', err)
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to Whack a Mole!</Text>
        <Text>High Scores</Text>
        <View style="styles.scoreBoard">
        {
          this.state.scores.map((score, index) => (
            <View key={index} style={styles.item}>
              <Text style={styles.name}>{score.name}</Text>
              <Text style={styles.description}>{score.description}</Text>
              <Text style={styles.city}>{score.score}</Text>
            </View>
          ))
        }
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
  },
  item: { padding: 10 },
  name: { fontSize: 20 },
  description: { fontWeight: '600', marginTop: 4, color: 'rgba(0, 0, 0, .5)' },
  city: { marginTop: 4 }
});
