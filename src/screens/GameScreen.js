import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyleSheet, View, StatusBar } from 'react-native';

import { gameOperations } from '../state/game';

import Board from '../components/Board';
import GameoverModal from '../components/GameoverModal';
import PlayerInfo from '../components/PlayerInfo';
import HeaderButton from '../components/HeaderButton';

class GameScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Tic Tac Toe',
    headerRight: (
      <View style={styles.headerRightContainer}>
        <HeaderButton
          onPress={navigation.getParam('onNewGame')}
          style={styles.headerButton}
          size={16}
          color="#fff">
        </HeaderButton>
      </View>
    )
  });

  constructor(props, context) {
    super(props, context);

    this.state = { showModal: false };
  }

  componentDidMount() {
    this.props.navigation.setParams({ onNewGame: this.handleNewPress });
  }

  handleMove = (coord) => {
    const { board, player, gameover, playTurn, checkWinner } = this.props;
    const { row, col } = coord;

    if (gameover || board[row][col] !== 0) {
      return;
    }

    playTurn(player, row, col);

    const hasWinner = checkWinner(board, player);

    if (hasWinner) {
      this.setState({ showModal: true });
    }
  }

  handleModalPress = (answer) => {
    if (answer) {
      this.props.newGame();
    }

    this.setState({ showModal: false });
  }

  handleModelClose = () => {
    this.setState({ showModal: false });
  }

  handleNewPress = () => {
    this.props.newGame();
  }

  render() {
    const { showModal } = this.state;
    const { board, player, gameover, winner } = this.props;
    const draw = winner === 0;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={[styles.gameContainer, styles.gameArea]}>
          <Board board={board} onMove={this.handleMove} />
        </View>
        <View style={[styles.gameContainer, styles.gameStatus]}>
          <PlayerInfo player={player} gameover={gameover}></PlayerInfo>
        </View>
        <GameoverModal
          visible={showModal}
          player={winner}
          isDraw={draw}
          onButtonPress={this.handleModalPress}
          onRequestClose={this.handleModelClose}>
        </GameoverModal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerRightContainer: {},
  headerButton: {
    paddingRight: 10
  },
  container: {
    flex: 1,
    alignItems: 'stretch',
  },
  gameContainer: {
    paddingTop: 30,
    paddingBottom: 10,
    alignItems: 'center',
  },
  gameArea: {
    flex: 2,
  },
  gameStatus: {
    flex: 1,
  }
});

const { arrayOf, number, func, bool } = PropTypes;

GameScreen.propTypes = {
  board: arrayOf(arrayOf(number)).isRequired,
  player: number.isRequired,
  winner: number.isRequired,
  gameover: bool.isRequired,
  playTurn: func.isRequired,
  checkWinner: func.isRequired,
  newGame: func.isRequired
};

const mapStateToProps = (state) => {
  const { gameState } = state;

  return {
    board: gameState.board,
    player: gameState.player,
    gameover: gameState.gameover,
    winner: gameState.winner
  };
};

const mapDispatchToProps = {
  playTurn: gameOperations.playTurn,
  checkWinner: gameOperations.checkWinner,
  newGame: gameOperations.newGame
};

export default connect(mapStateToProps, mapDispatchToProps)(GameScreen);
