import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'

import store from './store'

import './assets/scss/main.scss'

(async () => {
  store.$api.getFavorites()
  try {
    await store.$api.getAllBreedsList()
  } catch (error) {
    console.error(error)
  }
})()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
