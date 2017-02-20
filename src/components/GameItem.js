import React, { PureComponent } from 'react'
import Title from './Title'
import { connect } from 'react-redux'

export class GameItem extends PureComponent {
  render() {
    return(
      <div>
        <Title content="I'm a game item!" />
      </div>
    )
  }
}

export default (GameItem)
