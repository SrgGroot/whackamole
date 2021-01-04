import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import Hole from './hole';
import InfoBar from './infoBar';

// imports from Amplify library
import { withAuthenticator } from 'aws-amplify-react-native'
import { API, graphqlOperation } from 'aws-amplify'

// import the GraphQL query
import { listWhackaMoles } from '../../../graphql/queries'
// import the GraphQL mutation
import { createWhackaMole } from '../../../graphql/mutations'

// create client ID
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
const CLIENTID = uuidv4();

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.generateRandomMoleHole = this.generateRandomMoleHole.bind(this);
    this.handleWhack = this.handleWhack.bind(this);

    let score = 0
    const startingMoleHole = this.generateRandomMoleHole();
    
    this.state = {
      gameIsActive: true,
      time: 10,
      currentMoleHole: startingMoleHole,
      currentScore: score,
      moleDelayMiliseconds: 300,
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    if (this.state.time <= 0) {
      this.setState({
        gameIsActive: false
      });
    } else { 
      this.setState({
        time: this.state.time - 1
      });
    }
  }
  
  generateRandomMoleHole () {
    const randomMoleHole = Math.floor(Math.random() * 8);
    return randomMoleHole;
  }

  changeMoleHole = (hole) => {
      this.setState({currentMoleHole: hole});
  }
  
  handleWhack() {
    //remove the mole from the screen
    this.setState({currentMoleHole: null, currentScore: this.state.currentScore + 1});

    //keep it from popping a mole in the same hole twice in a row which is visually kind of confusing.
    let newMoleHole = this.generateRandomMoleHole();
    if (newMoleHole == this.state.currentMoleHole) {
      newMoleHole = this.generateRandomMoleHole();
    } 
 
    //apply the delay that is set by the user in the main menu
    let delay = this.state.moleDelayMiliseconds; 
    setTimeout( this.changeMoleHole.bind(this, newMoleHole), delay);
  }

  createScore = async() => {
    const { name, score, frequency  } = this.state
    // store the restaurant data in a variable
    const scoreToBeCreated = {
      name, score, frequency, clientId: CLIENTID
    }
    // perform an optimistic response to update the UI immediately
    this.setState({
      name: '', score: '', frequency: ''
      })
    try {
      // make the API call
      await API.graphql(graphqlOperation(createWhackaMole, {
        input: scoreToBeCreated
      }))
      console.log('score created!')
    } catch (err) {
      console.log('error creating score...', err)
    }
  }

  // change form state then user types into input
  onChange = (key, value) => {
    this.setState({ [key]: value })
  }

  render() {
    return (
      <>
        <InfoBar 
          score={this.state.currentScore}
          time={this.state.time}
        />
        <View style={styles.boardContainer}>
          <View style={styles.board}>
            <View style={styles.boardRow}>
              <Hole currentMoleHole={this.state.currentMoleHole} registerWhackedMole={this.handleWhack} holeId='0'/>
              <Hole currentMoleHole={this.state.currentMoleHole} registerWhackedMole={this.handleWhack} holeId='1'/>
              <Hole currentMoleHole={this.state.currentMoleHole} registerWhackedMole={this.handleWhack} holeId='2'/>
            </View>
            <View style={styles.boardRow}>
              <Hole currentMoleHole={this.state.currentMoleHole} registerWhackedMole={this.handleWhack} holeId='3'/>
              <Hole currentMoleHole={this.state.currentMoleHole} registerWhackedMole={this.handleWhack} holeId='4'/>
              <Hole currentMoleHole={this.state.currentMoleHole} registerWhackedMole={this.handleWhack} holeId='5'/>
            </View>
            <View style={styles.boardRow}>
              <Hole currentMoleHole={this.state.currentMoleHole} registerWhackedMole={this.handleWhack} holeId='6'/>
              <Hole currentMoleHole={this.state.currentMoleHole} registerWhackedMole={this.handleWhack} holeId='7'/>
              <Hole currentMoleHole={this.state.currentMoleHole} registerWhackedMole={this.handleWhack} holeId='8'/>
            </View>
          </View>
        </View> 
      </>
    );
  }
}

const styles = StyleSheet.create({
  boardContainer: {
    flex: 1,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  board: {
    flex: 1,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#000',
    marginTop: '40%'
  },
  boardRow: {
    height: 124,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#444',
  },
  boardRow2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#555',
  },
  boardRow3: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#666',
  },
});
