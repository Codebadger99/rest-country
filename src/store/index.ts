import { createStore } from 'vuex'


export default createStore({
  state: {
    theme: "light"
  },
  getters: {
  },
  mutations: {
    changeTheme(state){
      return state.theme = "dark"
    }
  },
  actions: {
  },
  modules: {
  }
})
