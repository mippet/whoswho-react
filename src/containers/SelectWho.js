import React, { PureComponent } from 'react'
import Title from '../components/Title'
import { connect } from 'react-redux'
import Card from '../components/Card'

export class SelectWho extends PureComponent {
  render() {
    return(
      <div>
        <Title content="Select your cat!" />
        <Card />
      </div>
    )
  }
}



export default (SelectWho)
