import React, { PureComponent } from 'react'
import Title from '../components/title'
import { connect } from 'react-redux'

export class Lobby extends PureComponent {
  render() {
    return(
      <div>
        <Title content="Game Lobby" />
      </div>
    )
  }
}

//import NewGameButton
//import list of games
export default (Lobby)