import React, { PureComponent } from 'react'
import Title from '../components/title'
import { connect } from 'react-redux'

export class Game extends PureComponent {
  render() {
    return(
      <div>
        <Title content="New Game" />
      </div>
    )
  }
}

//import NewGameButton
//import list of games
export default (Game)
