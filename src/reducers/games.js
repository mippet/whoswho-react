import { FETCHED_GAMES } from '../actions/games/fetch-games'
import { CREATED_GAME } from '../actions/games/create-game'
import {
  GAME_CREATED,
  GAME_UPDATED,
  GAME_REMOVED
} from '../actions/games/subscribe'


export default (state = [],{ type, payload } = {}) => {
  switch(type) {
    //fetched games return an empty array, we concat ("add")
    // the payload to that array
    case FETCHED_GAMES :
      return [].concat(payload)

    //games created returns the payload, we "add" the state to that
    case GAME_CREATED :
    const newGame = Object.assign({}, payload)
      return [newGame].concat(state)

    case GAME_UPDATED :
      return state.map((game) => {
        if (game._id === payload._id) {
          return Object.assign({}, payload)
        }
        return game
      })

    case GAME_REMOVED :
      return state.filter((game) => (game._id !== payload._id))

    default :
      return state
  }
}
