import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'
import {List} from 'material-ui/List'
//actions
import fetchGames from '../actions/games/fetch'
import addGame from '../actions/games/add-game'
import subscribeToGamesService from '../actions/games/subscribe'
//components
import Title from '../components/Title'
import GameItem from '../components/GameItem'

export class Lobby extends PureComponent {
  static propTypes = {
    games: PropTypes.array.isRequired,
    currentUser: PropTypes.object.isRequired,
    fetchGames: PropTypes.func.isRequired,
    addGame: PropTypes.func.isRequired,
    subscribeToGamesService: PropTypes.func.isRequired,
  }

  componentDidMount() {
    //all actions that are getting or updating data from db and going through feathers hooks
    this.props.fetchGames()
    this.props.subscribeToGamesService()
  }

  showGameItem(game, index){
    //making function that enables rendering GameItem component by assigning its index from games array as key + destructuring all game props
    return <GameItem key={ index } { ...game } /}
  }

  addNewGame() {
    //making add-game action accessible in return by making new addNewGame function that takes currentUser as argument. Note that tis is possible because we set our addGame action to take user argument
    this.props.addGame(this.props.currentUser)
  }

  render() {
    return(
      <div classname="games wrapper">
        <header>
          <Title content="Welcome to Guess Who? Lobby!"/>
        </header>

        <RaisedButton
        label="Start new Game"
        onClick={ this.addNewGame.bind(this) }
        primary={true} />

        <main className="container">
          { this.props.games.map(this.showGameItem.bind(this))}
        </main>
      </div>
    )
  }
}
//all static props that are getting data from the store (=> that are not actions) should be destructured in mapStateToProps function
const mapStateToProps = ({ games, currentUser }) => ({ games, currentUser })
//all static propTypes (actions, arrays and objects) should be 'connected' to this component
export default connect(mapStateToProps, {
  fetchGames,
  addGame,
  subscribeToGamesService,
}) (Lobby)
