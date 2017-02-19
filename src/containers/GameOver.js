import React, { PureComponent } from 'react'
import Title from '../components/Title'
import { connect } from 'react-redux'
import Card from '../components/Card'

export class GameOver extends PureComponent {
  render() {
    return(
      <div>
        <Title content="Game Over!" />
      </div>
    )
  }
}




export default (GameOver)
