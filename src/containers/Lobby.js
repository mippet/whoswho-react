import React, { PureComponent } from 'react'
import Title from '../components/title'
import { connect } from 'react-redux'

export class Lobby extends PureComponent {
  render() {
    return(
      <div className="Game page">
        <Title content="Game Lobby" />
      </div>
    )
  }
}

export default (Lobby)
