import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      token: localStorage.getItem('token') || ''
    };
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
      localStorage.setItem('token', token); // Save the token to local storage or Vuex store
    },
    clearToken(state) {
      state.token = '';
      localStorage.removeItem('token'); // Remove the token from local storage or Vuex store
    }
  },
  actions: {
    login({ commit }, token) {
      commit('setToken', token);
    },
    logout({ commit }) {
      commit('clearToken');
    }
  }
});

export default store;
