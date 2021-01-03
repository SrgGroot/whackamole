import React, {Component} from 'react';
import { StyleSheet, Image, View, TouchableOpacity } from 'react-native';

export default class Mole extends Component {
  constructor(props) {
    super(props);
    this.onWhack = this.onWhack.bind(this); 
  }

  onWhack(e) {
    this.props.onWhack(e.target.value);
  }
  
  render() {
    return (
      <TouchableOpacity onPress={this.onWhack} style={styles.container}>
        <Image
          style={styles.moleImage} 
          source={require('../images/mole.png')} 
        />
      </TouchableOpacity>
    );
  }    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  moleImage: {
  },
});
