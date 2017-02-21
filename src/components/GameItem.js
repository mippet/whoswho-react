import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import RaisedButton from 'material-ui/RaisedButton'
import joinGame from '../actions/games/join-game'
import subscribeToGamesService from '../actions/games/subscribe'
// import './GameItem.sass'

export class GameItem extends PureComponent {
  static propTypes = {
    _id: PropTypes.string.isRequired,
    createdBy: PropTypes.object.isRequired,
    joinedBy: PropTypes.object,
    createdAt: PropTypes.string.isRequired,
    created: PropTypes.bool.isRequired,
    joined: PropTypes.bool.isRequired,
    players: PropTypes.array.isRequired,
    turn: PropTypes.number.isRequired,
    // joinGame: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.joinGame = this.joinGame.bind(this);
  }

  joinGame() {
      const { _id } = this.props
      this.props.joinGame({_Id})
    }

  // handleClick(e) {
  //   const { _id, joinedBy, currentUser } = this.props
  //   this.props.joinGame({ _id, joinedBy }, currentUser)
  // }

  render() {
    const { _id, createdBy, CreatedAt, created, joined, players, turn } = this.props

    return(
      <article className="game">
        <h3>Guess Who game created by {createdBy.name}</h3>
          <RaisedButton label="Join this game" secondary={true}
            onClick={()=> this.joinGame.bind(this)} />
      </article>
    )
  }
}

const mapStateToProps = state => {
  return {
    joinedBy: state.currentUser
  };
};

export default connect(mapStateToProps, {
  joinGame,
  subscribeToGamesService,
})(GameItem)
