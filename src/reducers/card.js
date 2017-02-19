import { SELECTED_CARD } from '../actions/cards/select-card'


export default (state = [], { type, payload } = {}) => {
  switch(type) {

    case SELECTED_CARD :
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
