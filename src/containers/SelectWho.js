import React, { PureComponent, PropTypes } from 'react'
import Title from '../components/Title'
import { connect } from 'react-redux'
import Card from '../components/Card'
import currentGame from '../actions/games/current-game'
import { Link } from 'react-router'
import RaisedButton from 'material-ui/RaisedButton'

export class SelectWho extends PureComponent {
  static propTypes = {
    game: PropTypes.array,
    currentUser: PropTypes.object,
    subscribeToGamesService: PropTypes.func,
    cards: PropTypes.array
  }

  render() {
  const {game} = this.props
    return(
      <div>
        <Title content="Select your cat!" />
          { game.cards.map((card) => {
                  return <
                  Card
              key={card.cardId}
                 { ...card } />
                })}
        <Card />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
 return {
   game: state.games.filter((game) => game._id === state.currentGame)[0],
 }
}


export default connect(mapStateToProps,{}) (SelectWho)
