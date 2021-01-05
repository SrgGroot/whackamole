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
      //populate the main menu with the top 5 scores
      let topFiveSocres = [];
      const WhackaMoleScoreData = await API.graphql(graphqlOperation(listWhackaMoles))
      
      console.log(WhackaMoleScoreData.data.listWhackaMoles.items.sort((a,b) => (a.score < b.score) ? 1 : ((b.score < a.score) ? -1 : 0)));

      //console.log('WhackaMoleScoreData:', WhackaMoleScoreData.data.listWhackaMoles.items)
      this.setState({
        scores: WhackaMoleScoreData.data.listWhackaMoles.items.slice(0, 5)
      })
    } catch (err) {
      console.log('error fetching scores...', err)
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.highScoreTitle}>High Scores</Text>
        <View style="styles.scoreBoard">
        {
          this.state.scores.map((score, index) => (
            <View key={index} style={styles.item}>
              <Text style={styles.name}>{index+1}){score.name} - {score.score} moles whacked at {score.frequency}ms frequency</Text>
            </View>
          ))
        }
        </View>
        <Button 
          title="Start" 
          onPress={() =>
            this.props.navigation.navigate('Whack-A-Mole', { name: 'Whack-A-Mole!' })
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
  highScoreTitle: {
    textAlign: 'center',
    fontSize: 24
  }
});
