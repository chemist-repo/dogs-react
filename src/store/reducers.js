import {
  SET_ALL_BREEDS_LIST,
  SET_RANDOM_DOGS_LIST,
  SET_MORE_RANDOM_DOGS_LIST,
  SET_FAVORITES,
  SET_IS_RANDOM_DOGS_ACTION,
  SET_BREED_DOGS_LIST,
  SET_MORE_BREED_DOGS_LIST,
  SET_IS_BREED_DOGS_ACTION
} from './action-types'

import initialState from './state'

export default function Reducers (state = initialState, action) {
  switch (action.type) {
    case SET_ALL_BREEDS_LIST:
      return Object.assign({}, state, {
        allBreedsList: action.payload
      })
    case SET_RANDOM_DOGS_LIST:
      return Object.assign({}, state, {
        randomDogsList: action.payload
      })
    case SET_MORE_RANDOM_DOGS_LIST:
      return Object.assign({}, state, {
        randomDogsList: state.randomDogsList.concat(action.payload)
      })
    case SET_FAVORITES:
      return Object.assign({}, state, {
        favorites: action.payload
      })
    case SET_IS_RANDOM_DOGS_ACTION:
      return Object.assign({}, state, {
        isRandomDogsAction: action.payload
      })
    case SET_BREED_DOGS_LIST:
      return Object.assign({}, state, {
        breedDogsList: action.payload
      })
    case SET_MORE_BREED_DOGS_LIST:
      return Object.assign({}, state, {
        breedDogsList: state.breedDogsList.concat(action.payload)
      })
    case SET_IS_BREED_DOGS_ACTION:
      return Object.assign({}, state, {
        isBreedDogsAction: action.payload
      })
    default:
      return state
  }
}
