import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutation-type'

export default {
  [ADD_COUNTER](state, payload) {
    payload.count++
  },
  [ADD_TO_CART](state, payload) {
    payload.count++
    payload.checked = true
    state.cartList.push(payload)
  }
}