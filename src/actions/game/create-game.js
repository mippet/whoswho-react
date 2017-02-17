import API from '../../middleware/api'
import loadError from '../load/error'
import loadSuccess from '../load/success'
import loading from '../loading'

export const CREATE_GAME = 'CREATE_GAME'

const api = new API()
const game = api.service('game-model')

export default () => {
  return (dispatch) => {
    dispatch(loading(true))

    game.find({
      query: {
        $limit: 25
      }
    })
    .then((response) => {
      dispatch(loadSuccess())
      dispatch({
        type: CREATE_GAME,
        payload: response.data
      })
    })
    .catch((error) => {
      dispatch(loadError(error))
    })
    .then(() => {
      dispatch(loading(false))
    })
  }
}
