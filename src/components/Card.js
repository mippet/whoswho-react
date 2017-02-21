import React, { PureComponent, PropTypes } from 'react'
import Title from './Title'
import { connect } from 'react-redux'

export class Card extends PureComponent {
  static propTypes = {
  game: PropTypes.object.isRequired,
  currentUser: PropTypes.object.isRequired,
  cardId: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  flipped: PropTypes.bool.isRequired,
  selected: PropTypes.bool.isRequired,
  red: PropTypes.bool.isRequired,
  grey: PropTypes.bool.isRequired,
  black: PropTypes.bool.isRequired,
  glass: PropTypes.bool.isRequired,
  glasses: PropTypes.bool.isRequired,
  tongue: PropTypes.bool.isRequired,
  bow: PropTypes.bool.isRequired,
  hat: PropTypes.bool.isRequired,
  }

  render() {
    const { cardId, image, flipped, selected, red, grey, black, glass, glasses, tongue, bow, hat } = this.props
    return(
      <div>
      <Title content= "blaaaaaa" />
      { image }
      </div>
    )
  }
}

// const mapStateToProps =
// mapping the state of the store to the props
// reducer cards is triggered by select-card action :
const mapStateToProps = ({ games, currentGame, currentUser }, { cardId }) => {
  const game = games.filter((game) => game._id === currentGame)[0]
  const card = game.cards.filter((card) => card.cardId === cardId)

  return {
    game,
    currentUser,
    ...card
  }
}

export default connect(mapStateToProps, {})(Card)
