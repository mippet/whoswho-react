import React, { PureComponent } from 'react'
import Title from '../components/Title'
import { connect } from 'react-redux'
import Card from '../components/Card'

export class StartGame extends PureComponent {
  render() {
    return(
      <div>
        <Title content="Ready?" />
        <Card />
      </div>
    )
  }
}




export default (StartGame)
