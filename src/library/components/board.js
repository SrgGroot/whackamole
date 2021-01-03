import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import Hole from './hole';
import InfoBar from './infoBar';

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
