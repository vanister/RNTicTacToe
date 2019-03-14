import React, { Component } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

class GameScreen extends Component {
  static navigationOptions = {
    title: 'Tic Tac Toe'
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle='light-content'></StatusBar>
        <Text>Game Screen!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default GameScreen;
