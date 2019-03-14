import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const HeaderButton = ({ onPress, size, color, style }) => {
  const additionalStyles = style instanceof Array ? style : [style]
  const textStyle = {
    fontSize: size || undefined,
    color
  };

  return (
    <TouchableOpacity
      style={[styles.conatiner, ...additionalStyles]}
      onPress={onPress}>
      <Text style={[styles.text, textStyle]}>New game</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  conatiner: {},
  text: {
    fontSize: 16,
    color: '#fff'
  }
});

const { func, string, number, array, object, oneOfType } = PropTypes;

HeaderButton.propTypes = {
  onPress: func,

  style: oneOfType([array, object]),
  size: number,
  color: string
};

export default HeaderButton;
