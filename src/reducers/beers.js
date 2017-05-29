import { ADD_BEER } from '../actions'
import { HIDE_BEER } from '../actions'

const beer = (state = {}, action) => {
  switch (action.type) {
    case ADD_BEER:
      return {
        id: action.id,
        name: action.name
      }
    default:
      return state
  }
}

const beers = (state = [], action) => {
  switch (action.type) {
    case ADD_BEER:
      return [
        ...state,
        beer(undefined, action)
      ]
    case HIDE_BEER:
      return {
        ...state,
      }
    default:
      return state
  }
}

export default beers
