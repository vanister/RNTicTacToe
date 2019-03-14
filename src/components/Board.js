import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';

import Square from './Square';

const Board = ({ board, onMove }) => {

  return (
    <View style={styles.container}>
      {board.map((row, rIdx) => (

        <View key={rIdx} style={styles.row}>

          {row.map((col, cIdx) => {
            const borderStyle = styles[`${rIdx}_${cIdx}`] || {};
            const player = col;
            const coord = { row: rIdx, col: cIdx };

            return (
              <Square key={cIdx} player={player} coord={coord} style={borderStyle} onMove={onMove}></Square>
            );
          })}
        </View>
      ))}
    </View>
  );
};

const borderWidth = 1;
const borderLeftRight = { borderLeftWidth: borderWidth, borderRightWidth: borderWidth };
const borderTopBottom = { borderTopWidth: borderWidth, borderBottomWidth: borderWidth };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
  },
  row: {
    flexDirection: 'row'
  },
  '0_1': borderLeftRight,
  '2_1': borderLeftRight,
  '1_1': { borderWidth: borderWidth },
  '1_0': borderTopBottom,
  '1_2': borderTopBottom
});

const { arrayOf, number, object, func } = PropTypes;

Board.propTypes = {
  styles: object,
  board: arrayOf(arrayOf(number)).isRequired,
  onMove: func.isRequired
};

export default Board;
