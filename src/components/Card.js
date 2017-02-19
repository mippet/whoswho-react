import React, { PureComponent } from 'react'
import Title from './Title'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'
// import './Card.sass'




// React component for the front side of the card
class CardFront extends PureComponent {
  render() {
    return(
      <div className='card-side side-front'>
        <div className='container-fluid' style={{ backgroundColor: `red` }}>
        <RaisedButton label="This is you" primary={true} onClick={ pickCard }/>
        </div>
      </div>
    )
  }
}
// React component for the back side of the card
class CardBack extends PureComponent {
  render() {
    return(
      <div className='card-side side-back'>
        <div className='container-fluid' style={{ backgroundColor: `gray` }}>
        </div>
      </div>
    )
  }
}

// React component for the card (main component)
export class Card extends PureComponent {

  render() {
    return(
      <div className='card-container'>
        <div className='card-body'>
          <Title content="I am a card" />
        </div>
      </div>
    )
  }
}

// // Render Card component
// ReactDOM.render(<Card />, cardContainer);


export default (Card)
