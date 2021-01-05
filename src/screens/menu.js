import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';
import { Auth } from '@aws-amplify/auth';
// imports from Amplify library
import { API, graphqlOperation } from 'aws-amplify'

import { listWhackaMoles } from '../../graphql/queries'

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topFiveHighScores: [],
      userHighScore: 0,
      userName: "",
      frequency: "0"
    }
  }

  async componentDidMount() {
    try {
      //Get information to display the user's all-time high score
      let user = await Auth.currentAuthenticatedUser()
      this.setState({
        userName: user.username
      });

      //Get score data from the graphql API
      const WhackaMoleScoreData = await API.graphql(graphqlOperation(listWhackaMoles))
      const sortedScoresDescending = WhackaMoleScoreData.data.listWhackaMoles.items.sort((a,b) => (a.score < b.score) ? 1 : ((b.score < a.score) ? -1 : 0))

      //populate the main menu with the top 5 scores
      this.setState({
        topFiveHighScores:  sortedScoresDescending.slice(0, 5)
      })

      let userHighScore = WhackaMoleScoreData.data.listWhackaMoles.items.filter(function (score) {
        return score.name == user.username;
      });
      userHighScore = userHighScore.slice(0,1);
      userHighScore = userHighScore[0];
      //find the user's high score
      this.setState({
        userHighScore:  userHighScore.score
      })
    } catch (err) {
      console.log('error fetching scores...', err)
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.userHighScore}>{this.state.userName}'s high score: {this.state.userHighScore}</Text>
        <Text style={styles.topFiveHighScores}>High Scores</Text>
        <View style={styles.scoreBoard}>
        {
          this.state.topFiveHighScores.map((score, index) => (
            <View key={index}>
              <Text style={styles.score}>{index + 1}){score.name} - {score.score} moles whacked at {score.frequency}ms frequency</Text>
            </View>
          ))
        }
        </View>
        <>
          <Text style={styles.frequency}>Mole Frequency (0-999ms)</Text>
          <TextInput 
            style={styles.frequencyInput} 
            value={this.state.frequency}
            keyboardType={'numeric'} 
            maxLength={3}
            onChangeText={(frequency) => this.setState({frequency})}
            onFocus= {() => this.setState({frequency : ''})}
          />
        </>
        <View style={styles.buttonContainer}>
          <Button
            color={'#00AA00'}
            title="Start" 
            onPress={() =>
              this.props.navigation.navigate('Whack-A-Mole', { frequency: this.state.frequency })
            }
          />
          <Button 
            title="Sign Out" 
            onPress={() =>
              Auth.signOut()
            }
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
  },
  topFiveHighScores: {
    marginTop: 50,
    textAlign: 'center',
    fontSize: 24
  },
  scoreBoard: {
    flex: 1,
    alignItems: 'center'
  },
  score: {
    fontSize: 14,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  userHighScore: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold'
  },
  frequency: {
    textAlign: 'center',
    fontSize: 22
  },
  frequencyInput: {
    textAlign: 'center',
    backgroundColor: '#FFF'
  }
});
