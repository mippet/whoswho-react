import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'
import {List} from 'material-ui/List';

import Title from '../components/Title'
import setupGames from '../actions/game/setupGames'
import createGame from '../actions/game/create-game'

export class Lobby extends PureComponent {
  //after Lobby component is renderd, we add
  // the props that we got from SetUpgames to THIS component.
  componentDidMount(){
    this.props.setupGames()
  }

  render() {
    const { games, createGame} = this.props

    return(
      <div>
        <Title content="Game Lobby" />
        <RaisedButton label="Create Game" primary={true} onClick={ createGame} />

          <RaisedButton label="Join Game" />
          console.log("join is clicked")
      </div>
    )
  }
}

// Lobby.propTypes = {
//   games: PropTypes.array.isRequired,
// }

const mapStateToProps = (state) => {
  return {
    games: state.games,
  }
}

export default connect(mapStateToProps, {setupGames, createGame})(Lobby)
