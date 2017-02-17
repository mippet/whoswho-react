import API from '../../middleware/api'
const api = new API()
const game = api.service('game')

export default (card, user) => {
  //checking if the card is flipped by the user by checking if there is this user's id in the flippedBy object/array
  //const flipped is therefore true or false
  const flipped = card.flippedBy.filter((flip) => (flip === user._id)).length > 0

  api.app.authenticate()
    .then(() => {
      //finding the card and toggling flipped state
      game.patch(card._id, { flipped: !flipped })
    })
    .catch((error) => {
      console.error(error)
      // e.g. redirect to sign in!
    })

  return { type: 'FLIPPED_CARD' }
}
