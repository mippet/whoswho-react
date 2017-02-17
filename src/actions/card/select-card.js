import API from '../../middleware/api'
const api = new API()
const game = api.service('game')
export const CARD_SELECTED = 'CARD_SELECTED'

export default (card, user) => {
  const selectedCard = (card) => {
    return {
      type: CARD_SELECTED,
      payload: card
    }
  }
}
