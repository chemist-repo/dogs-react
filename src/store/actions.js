import * as actionTypes from './action-types'

const actions = Object.entries(actionTypes).reduce((prev, [key, type]) => {
  prev[key] = payload => ({
    type,
    payload
  })
  return prev
}, {})

export default actions
