import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import { history, currentUser } from '../store'
import RaisedButton from 'material-ui/RaisedButton'
import {List} from 'material-ui/List'
//actions
import fetchGames from '../actions/games/fetch-games'
import createGame from '../actions/games/create-game'
import subscribeToGamesService from '../actions/games/subscribe'
//components
import Title from '../components/Title'
import GameItem from '../components/GameItem'

export class Lobby extends PureComponent {
  static propTypes = {
    games: PropTypes.array.isRequired,
    currentUser: PropTypes.object.isRequired,
    fetchGames: PropTypes.func.isRequired,
    createGame: PropTypes.func.isRequired,
    subscribeToGamesService: PropTypes.func.isRequired,
  }

  componentWillMount() {
    if (!this.props.signedIn) {
      history.push('/sign-in')
    }
  }

  const
  componentDidMount() {
    //all actions that are getting or updating data from db and going through feathers hooks
    this.props.fetchGames()
    this.props.subscribeToGamesService()
  }

  handleClick(e) {
    e.preventDefault()
    this.props.createGame()
  }

  showGameItem(game, index){
    //making function that enables rendering GameItem component by assigning its index from games array as key + destructuring all game props
    return <ul><GameItem key={ index } { ...game } /></ul>
  }

  render() {
    const { games, signedIn, createGame } = this.props
    return(
      <div className="games wrapper">
        <header>
          <Title content={'Welcome ' + this.props.currentUser.name}/>
        </header>



        <RaisedButton label="Start new game" secondary={true}
          onClick={this.handleClick.bind(this)} />

        <main className="container">
          { this.props.games.map(this.showGameItem.bind(this))}
        </main>
      </div>
    )
  }
}
//all static props that are getting data from the store (=> that are not actions) should be destructured in mapStateToProps function
const mapStateToProps = ({ games, currentUser }) => ({
  games,
  currentUser,
  signedIn: (!!currentUser && !!currentUser._id),
 })
//all static propTypes (actions, arrays and objects) should be 'connected' to this component
export default connect(mapStateToProps, {
  fetchGames,
  createGame,
  subscribeToGamesService,
}) (Lobby)
