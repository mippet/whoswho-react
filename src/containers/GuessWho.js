import React, { PureComponent } from 'react'
import Title from '../components/Title'
import { connect } from 'react-redux'
import Card from '../components/Card'

export class GuessWho extends PureComponent {
  render() {
    return(
      <div>
        <Title content="Guess Who!" />
        <Card />
      </div>
    )
  }
}




export default (GuessWho)
