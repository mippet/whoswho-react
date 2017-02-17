import React, { PureComponent } from 'react'
import Title from '../components/Title'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'

import setupGames from '../actions/game/setupGames'
import createGame from '../actions/game/create-game'

export class Lobby extends PureComponent {
  //after Lobby component is renderd, we add
  // the props that we got from SetUpgames to THIS component.
  componentDidMount(){
    this.prop.setupGames()
  }

  render() {
    return(
      <div>
        <Title content="Game Lobby" />
        <RaisedButton label="Create Game" primary={true} onClick={ createGame} />
      </div>
    )
  }
}

//create NewGameButton
//import JoinButton
//import list of games
export default (Lobby)
