import API from '../../middleware/api'
const api = new API()
const game = api.service('game')
export const CARD_PICKED = 'CARD_PICKED'

export default (card, user) => {
  const pickedCard = (card) => {
    return {
      type: CARD_PICKED,
      payload: card
    }
  }
}
