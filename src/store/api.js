import axios from 'axios'
import $op from 'object-path'

import {
  SET_ALL_BREEDS_LIST,
  SET_RANDOM_DOGS_LIST,
  SET_MORE_RANDOM_DOGS_LIST,
  SET_IS_RANDOM_DOGS_ACTION,
  SET_BREED_DOGS_LIST,
  SET_MORE_BREED_DOGS_LIST,
  SET_IS_BREED_DOGS_ACTION
} from './action-types'
import actions from './actions'

const $axios = axios.create({
  baseURL: process.env.REACT_APP_API_URL || ''
})

const API = store => {
  return {
    async getAllBreedsList () {
      try {
        const { data } = await $axios({
          url: '/breeds/list/all',
          method: 'GET'
        })
        const allBreedsList = Object.keys($op.get(data, 'message', []))
        store.dispatch(actions[SET_ALL_BREEDS_LIST](allBreedsList))
        return Promise.resolve(allBreedsList)
      } catch (error) {
        return Promise.reject(error)
      }
    },
    async getRandomDogsList () {
      try {
        const { data } = await $axios({
          url: '/breeds/image/random/20',
          method: 'GET'
        })
        const randomDogsList = $op.get(data, 'message', [])
        store.dispatch(actions[SET_RANDOM_DOGS_LIST](randomDogsList))
        return Promise.resolve(randomDogsList)
      } catch (error) {
        return Promise.reject(error)
      }
    },
    async getMoreRandomDogsList () {
      store.dispatch(actions[SET_IS_RANDOM_DOGS_ACTION](true))
      try {
        const { data } = await $axios({
          url: '/breeds/image/random/20',
          method: 'GET'
        })
        const randomBreedsDogsList = $op.get(data, 'message', [])
        store.dispatch(actions[SET_MORE_RANDOM_DOGS_LIST](randomBreedsDogsList))
        return Promise.resolve(randomBreedsDogsList)
      } catch (error) {
        return Promise.reject(error)
      } finally {
        store.dispatch(actions[SET_IS_RANDOM_DOGS_ACTION](false))
      }
    },
    async getBreedRandomDogsList (breed) {
      try {
        const { data } = await $axios({
          url: `/breed/${breed}/images/random/20`,
          method: 'GET'
        })
        const breedDogsList = $op.get(data, 'message', [])
        store.dispatch(actions[SET_BREED_DOGS_LIST](breedDogsList))
        return Promise.resolve(breedDogsList)
      } catch (error) {
        return Promise.reject(error)
      }
    },
    async getMoreBreedRandomDogsList (breed) {
      store.dispatch(actions[SET_IS_BREED_DOGS_ACTION](true))
      try {
        const { data } = await $axios({
          url: `/breed/${breed}/images/random/20`,
          method: 'GET'
        })
        const breedDogsList = $op.get(data, 'message', [])
        store.dispatch(actions[SET_MORE_BREED_DOGS_LIST](breedDogsList))
        return Promise.resolve(breedDogsList)
      } catch (error) {
        return Promise.reject(error)
      } finally {
        store.dispatch(actions[SET_IS_BREED_DOGS_ACTION](false))
      }
    }
  }
}

export default API
