import React, { PureComponent } from 'react'
import Title from './Title'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'
import toggleFlipAction from '../actions/cards/toggle-flip'
import pickCard from '../actions/cards/pick-card'
import selectCard from '../actions/cards/select-card'

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
  static propTypes = {
    _id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    toggleFlipAction: PropTypes.func.isRequired,
  }

  toggleFlip() {
    const { _id, flippedBy, currentUser } = this.props

    if (!currentUser) return
    console.log('CLICK (Card)', _id)
    this.props.toggleFlipAction({ _id, likedBy }, currentUser)
  }

  render() {
    return(
      <div className='card-container'>
        <div className='card-body'>
          <CardBack />

          <CardFront />
        </div>
      </div>
    )
  }
}

// // Render Card component
// ReactDOM.render(<Card />, cardContainer);


export default (Card)
