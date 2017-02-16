import React, { PureComponent } from 'react'
import Title from './components/Title'
import { connect } from 'react-redux'

export class Card extends PureComponent {
  render() {
    return(
      <div>
        <Title content="I'm a card!" />
      </div>
    )
  }
}



export default (Card)
