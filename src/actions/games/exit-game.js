import API from '../../middleware/api'
import loadError from '../load/error'
import loadSuccess from '../load/success'
import loading from '../loading'
import {history} from '../../store'

export const EXIT_GAME = 'EXIT_GAME'

const api = new API()
const games = api.service('games')

export default (gameId) => {
  return (dispatch) => {
    dispatch(loading(true))
    // authenticate
    api.app.authenticate()
    // then => create game in database
    .then(() => {
      games.patch(gameId, { joined: 'false' })
      // then => success!
      .then((response) => {
        dispatch(loadSuccess())
        history.push('/games')
        dispatch({
          type: EXIT_GAME,
        })
        if (response.players.length === 0) {
          games.remove(gameId)
        }
      })
      // catch => display the error
      .catch((error) => {
        dispatch(loadError(error))
      })
      // then => clean up loading spinner
      .then(() => {
        dispatch(loading(false))
      })
    })
  }
}
