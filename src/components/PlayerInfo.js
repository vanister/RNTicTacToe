import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';

/**
 * The player info component.
 * @param {import('../models/props').PlayerInfo} props The player info props. 
 */
const PlayerInfo = ({ player, gameover, textStyle = {} }) => {
  const title = gameover ? `Gameover!` : `Player - ${player}`;
  const additionalTextStyle = textStyle instanceof Array ? textStyle : [textStyle];

  return (
    <View style={styles.container}>
      <Text style={[styles.title, ...additionalTextStyle]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 24
  }
});

const { object, number, bool } = PropTypes;

PlayerInfo.propTypes = {
  player: number.isRequired,
  gameover: bool.isRequired,

  textStyle: object
};

export default PlayerInfo;
