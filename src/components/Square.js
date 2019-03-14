import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet,  TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const playerIcon = (player, size = 60) => {
  const xIcon = <Icon name="md-close" size={size}></Icon>;
  const oIcon = <Icon name="md-radio-button-off" size={size - 10}></Icon>;

  switch (player) {
    case 1:
      return xIcon; 
    case 2:
      return oIcon; 
    default:
      return null;
  }
};

const Square = ({ player, onMove, coord, style = {} }) => {
  const additionalStyles = style instanceof Array ? style : [style];
  const currentPlayer = playerIcon(player);

  const onPress = () => {
    onMove(coord);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.square, ...additionalStyles]}
        onPress={onPress}>
        {
          currentPlayer &&
          <View style={styles.iconContainer}>{currentPlayer}</View>
        }
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  square: {
    height: 100,
    width: 100,
    justifyContent: 'center',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
});

const { object, number, array, func, oneOfType } = PropTypes;

Square.propTypes = {
  player: number.isRequired,
  onMove: func.isRequired,
  style: oneOfType([object, array]),
};

export default Square;
