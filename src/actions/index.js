export const ADD_BEER = 'ADD_BEER'

let nextBeerId = 0
export const addBeer = (name) => {
  return {
    type: 'ADD_BEER',
    id: nextBeerId++,
    name
  }
}
