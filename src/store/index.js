import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    products: [],
    cart: []
  },
  getters: {
    PRODUCTS (state) {
      // получаем продукт из state для отображения
      return state.products
    },
    CART (state) {
      // получаем корзину из state для отображения
      return state.cart
    }
  },
  mutations: {
    // занимается перезаписыванием state
    SET_PRODUCTS: (state, products) => {
      state.products = products
    },
    SET_CART: (state, product) => {
      state.cart.push(product)
    },
    REMOVE: (state, index) => {
      state.cart.splice(index, 1)
    }
  },
  actions: {
    GET_PRODUCT ({ commit }) {
      return axios('http://localhost:3000/products', {
        method: 'GET' // забираем данные по url ^
      })
        .then((products) => {
          commit('SET_PRODUCTS', products.data)
          return products
        })
        .catch((error) => {
          console.log('При работе с данными получили ошибку: ' + error)
          return error
        })
    },
    ADD_TO_CART ({ commit }, product) {
      commit('SET_CART', product)
    },
    REMOVE_FROM_CART ({ commit }, index) {
      commit('REMOVE', index)
    }
  },
  modules: {}
})
