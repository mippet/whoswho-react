import { SELECTED_CARD } from '../actions/cards/select-card'
import { PICKED_CARD } from '../actions/cards/pick-card'

export default (state = [], { type, payload } = {}) => {
  switch(type) {

    case SELECTED_CARD :
    return state.map((card) => {
      if (card._id === payload._id) {
        return Object.assign({}, payload)
      }
      return card
    })

    case PICKED_CARD :
    return state.map((card) => {
      if (card._id === payload._id) {
        return Object.assign({}, payload)
      }
      return card
    })

    default :
      return state
  }
}
