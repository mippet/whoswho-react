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
    createdAt: PropTypes.any.isRequired,
    started: PropTypes.bool.isRequired,
    joinGame: PropTypes.func.isRequired,
  }

  handleClick(e) {
    const { _id, joinedBy, currentUser } = this.props
    this.props.joinGame({ _id, joinedBy }, currentUser)
  }

  render() {
    const { _id, createdBy, joinedBy, joined } = this.props

    return(
      <li>
      <article className="game">
        <h3>Guess Who game created by</h3>
          <RaisedButton label="Join this game" secondary={true}
            onClick={this.handleClick.bind(this)} />
      </article>
      </li>
    )
  }
}

const mapStateToProps = ({ currentUser }, { joinedBy }) => {
  return {
    currentUser,
    joinedBy: currentUser
  }
}

export default connect(mapStateToProps, {
  joinGame,
  subscribeToGamesService,
})(GameItem)
