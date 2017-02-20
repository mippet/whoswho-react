import API from '../../middleware/api'
import loadError from '../load/error'
import loadSuccess from '../load/success'
import loading from '../loading'

export const FETCHED_CARDS = 'FETCHED_CARDS'

const api = new API()
const games = api.service('games')

export default () => {
  return (dispatch) => {
    dispatch(loading(true))

    cards.find({
      query: {
        $limit: 35
      }
    })
    .then((response) => {
      dispatch(loadSuccess())
      dispatch({
        type: FETCHED_CARDS,
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
