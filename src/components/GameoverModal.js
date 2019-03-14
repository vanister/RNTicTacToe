import React from 'react';
import PropTypes from 'prop-types';

import { View, StyleSheet, Modal, Button, Text, StatusBar } from 'react-native';

const GameoverModal = ({ visible, isDraw, player, onButtonPress, onRequestClose }) => {
  const title = isDraw ? 'Draw!' : `Player - ${player} wins!`;

  const onYesPress = () => {
    onButtonPress(true);
  };

  const onNoPress = () => {
    onButtonPress(false);
  };

  return (
    <Modal
      animationType="slide"
      visible={visible}
      onRequestClose={onRequestClose}>

      <StatusBar barStyle="default" />

      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>

        <View style={styles.buttonContainer}>
          <Button
            style={styles.primary}
            onPress={onYesPress}
            color="#3f51b5"
            title="Yes">
          </Button>
        </View>

        <View style={styles.buttonContainer}>
          <Button
            style={styles.secondary}
            color="#f50057"
            onPress={onNoPress} title="No">
          </Button>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    textAlign: 'center',
    padding: 20,
    fontSize: 24
  },
  buttonContainer: {
    padding: 5,
    width: 150
  },
  primary: {
    width: '50%'
  }
});

const { func, bool, number } = PropTypes;

GameoverModal.propTypes = {
  visible: bool.isRequired,
  isDraw: bool.isRequired,
  player: number.isRequired,
  onButtonPress: func.isRequired,
  onRequestClose: func.isRequired
};

export default GameoverModal;
