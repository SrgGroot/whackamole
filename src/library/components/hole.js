import React, {Component}  from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Mole from './mole';

export default class Hole extends Component  {

  constructor(props) {
    super(props);
    this.onWhack = this.onWhack.bind(this); 
  }

  onWhack(){
    this.props.registerWhackedMole();
  }

  render() {
    return (
      <View style={styles.hole}>
        {this.props.holeId == this.props.currentMoleHole ? <Mole onWhack={this.onWhack}/> : null }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  hole: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
