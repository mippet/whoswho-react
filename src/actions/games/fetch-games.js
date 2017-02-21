import API from '../../middleware/api'
import loadError from '../load/error'
import loadSuccess from '../load/success'
import loading from '../loading'

export const FETCHED_GAMES = 'FETCHED_GAMES'

const api = new API()
const games = api.service('games')

export const fetchGames = () => {
  return (dispatch) => {
    dispatch(loading(true))
console.log("fetching games... :)")
    api.app.authenticate()
    .then(() => {
        games.find({
          query: {
            $limit: 25
          }
        })
      .then((response) => {
        dispatch({
          type: FETCHED_GAMES,
          payload: response.data
        })
      })
      .catch((error) => {
        console.log(error);
      })
    })
    .catch((error) => {
      console.error(error)
    })
  }
}
