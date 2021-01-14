import { createStore } from 'redux'
import reducers from './reducers'
import API from './api'

const store = createStore(reducers)

export default Object.assign({}, store, { $api: API(store) })
