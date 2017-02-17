import API from '../../middleware/api'

export const CREATE_GAME = 'CREATE_GAME'

const api = new API()
const game = api.service('game-model')

export default () => {
  return (dispatch) => {
    game.dispatch = dispatch
    game.app.authenticate()
    .then((response) =>{
      game.create()
    }).cath((error) => {
      console.error(error)
    })
  }
}
