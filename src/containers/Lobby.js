import React, { PureComponent } from 'react'
import Title from '../components/Title'
import { connect } from 'react-redux'

export class Lobby extends PureComponent {
  //after Lobby component is renderd, we add
  // the props that we got from SetUpgames to THIS component.
  componentDidMount(){
    this.prop.SetUpgames()
  }
  render() {
    return(
      <div>
        <Title content="Game Lobby" />
      </div>
    )
  }
}

//import NewGameButton
//import JoinButton
//import list of games
export default (Lobby)
