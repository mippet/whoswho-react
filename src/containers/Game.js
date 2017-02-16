import React, { PureComponent } from 'react'
import Title from '../components/Title'
import { connect } from 'react-redux'
import Card from '../components/game/Card'

export class Game extends PureComponent {
  render() {
    return(
      <div>
        <Title content="New Game" />
        <{...card}/>
      </div>
    )
  }
}



export default (Game)
