import API from '../../middleware/api'

export const SETUP_GAMES = 'SETUP_GAMES'

const api = new API()
const game = api.service('game-model')

export default () => {
  return (dispatch) => {
    game.dispatch = dispatch
    game.app.authenticate()
    .then((response) =>{
      game.find()
    }).cath((error) => {
      console.error(error)
    })
  }
}
