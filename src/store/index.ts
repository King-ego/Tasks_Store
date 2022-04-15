import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'

export interface State {
  user: {
    first_name: string
    last_name: string
    email: string
  }
  cart: [{ id: number; qty: number }]
  tasks: [{ id: number; name: string; completed: boolean }]
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    user: {
      first_name: 'Jon',
      last_name: 'Snow',
      email: 'jon@snow.com',
    },
    cart: [{ id: 0, qty: 0 }],
    tasks: [{ id: 0, completed: false, name: '' }],
  },
  mutations: {
    // Cart
    addProduct(state, payload) {
      const existingProduct = state.cart.find((o) => o.id === payload.id)

      if (existingProduct) {
        existingProduct.qty += 1
      } else {
        payload.qty = 1
        state.cart.push(payload)
      }
    },

    // User
    saveFirstName(state, name) {
      state.user.first_name = name
    },
    saveLastName(state, name) {
      state.user.last_name = name
    },

    ADDTASK(
      state,
      payload: [{ id: number; completed: boolean; name: string }]
    ) {
      state.tasks = payload
    },
  },
  actions: {
    saveFirstName(context, payload) {
      context.commit('saveFirstName', payload)
    },
    saveTasks(context, payload) {
      context.commit('ADDTASK', payload)
    },
  },
  modules: {},
})

export function useStore() {
  return baseUseStore(key)
}
