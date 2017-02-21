import API from '../../middleware/api'
import loadError from '../load/error'
import loadSuccess from '../load/success'
import loading from '../loading'

const api = new API()
const games = api.service('games')

export default () => {
  return (dispatch) => {
    dispatch(loading(true))
    // authenticate
    api.app.authenticate()
    // then => create game in database
    .then(() => {
      games.create({})
      // then => success!
      .then((response) => {
        dispatch(loadSuccess())
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

// .then((response) => {
//   dispatch(loadSuccess())
//   dispatch({
//     type: STARTED_GAME,
//     payload: response
//   })
//   const selectWhoLink = `/games/${response._id}/select_who`
//   history.push(selectWhoLink)
// })
// // catch => display the error
