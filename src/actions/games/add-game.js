import API from '../../middleware/api'
import loadError from '../load/error'
import loadSuccess from '../load/success'
import loading from '../loading'

export const GAME_ADDED = 'GAME_ADDED'


const api = new API()
const games = api.service('games')

export default (user) => {
  return (dispatch) => {
    dispatch(loading(true))

    api.authenticate()
      .then(() => {
        games.create({
          players: [user._id],
        })
        .then((response) => {
          dispatch(loadSuccess())
          dispatch({
            type: GAME_ADDED,
            payload: response.data
          })
        })
        .cath((error) => {
          dispatch(loadError(error))
        })
        .then(() => {
          dispatch(loading(false))
        })
      })
  }
}
