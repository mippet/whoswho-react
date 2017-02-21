// import { STARTED_GAME } from '../actions/games/create-game'
import { JOINED_GAME } from '../actions/games/join-game'
import { LEFT_GAME } from '../actions/games/exit-game'

export default (state = null, { type, payload }) => {
  switch(type) {
    // case STARTED_GAME:
    //   return Object.assign({}, payload)

    case JOINED_GAME:
      return Object.assign({}, payload)

    case EXIT_GAME :
      return null

    default :
      return state
  }
}
