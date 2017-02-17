export default (state = [],{ type, payload} = {}) => {
  switch(type) {
    //fetched games return an empty array, we concat ("add")
    // the payload to that array
    case 'GAMES_FETCHED' :
    return [].concat(payload)

    //games created returns the payload, we "add" the state to that
    case 'GAMES_CREATED' :
    return [payload].concat(state)

    case 'GAME_UPDATED' :
      return state.map((game) => {
        return game._id === payload._id ? payload : game
      })
    default :
      return state
  }
}
