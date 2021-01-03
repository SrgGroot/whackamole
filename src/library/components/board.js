import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import Hole from './hole';

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.generateRandomMoleHole = this.generateRandomMoleHole.bind(this);
    this.handleWhack = this.handleWhack.bind(this);

    let score = 0
    const startingMoleHole = this.generateRandomMoleHole();
    
    this.state = {
      currentMoleHole: startingMoleHole,
      currentScore: score
    };
  }
  
  generateRandomMoleHole() {
    const randomMoleHole = Math.floor(Math.random() * 8);
    return randomMoleHole;
  }
  
  handleWhack() {
    this.setState({currentMoleHole: this.generateRandomMoleHole(), currentScore: this.state.currentScore + 1});
    console.log(this.state.currentScore);
    //this.setState({currentMoleHole: randomMoleHole, currentScore: this.state.currentScore + 1})
  }

  render() {
    return (
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
