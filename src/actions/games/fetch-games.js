import API from '../../middleware/api'
import loadError from '../load/error'
import loadSuccess from '../load/success'
import loading from '../loading'

export const FETCHED_GAMES = 'FETCHED_GAMES'

const api = new API()
const games = api.service('games')

export default () => {
  return (dispatch) => {
    dispatch(loading(true))
console.log("fetching games... :)")

    games.find()
    api.app.authenticate()
    .then((result) => {
      console.log('Results are in!', result)
      dispatch(loadSuccess())
      dispatch(fetchedGames(result))
    })
    .catch((error) => {
      dispatch(loadError(error))
    })
    .then(() => {
      dispatch(loading(false))
    })
  }
}
const fetchedGames = (result) => {
  console.log('dispatching fetchedGames')
  return {
    type: FETCHED_GAMES,
    payload: [].concat(result.data)
  }
}
