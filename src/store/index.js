import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: JSON.parse(localStorage.getItem('leadhit-site-id')) || '',
  },
  getters: {
    getData: (state) => {
      return state.data
    },
  },
  mutations: {
    setAuth(state, payload) {
      state.data = payload
      localStorage.setItem('leadhit-site-id', JSON.stringify(payload))
      router.push("/analytics");
    },
    logOut(state) {
      state.data = ''
      localStorage.removeItem('leadhit-site-id')
      router.push("/");
    },
  },
  actions: {
    async logIn({ commit }, payload) {
      return await axios.get(`https://track-api.leadhit.io/client/test_auth`, {
        headers: {
          'Content-Type': 'application/json',
          'api-key': `${payload}:eEZn8u05G3bzRpdL7RiHCvrYAYo`,
          // 'api-key': `5f8475902b0be670555f1bb3:eEZn8u05G3bzRpdL7RiHCvrYAYo`,
          'leadhit-site-id': payload,
        },
      }).then((res) => {
        const data = res.config.headers['leadhit-site-id']
        commit("setAuth", data);
      }).catch(err => console.log(err));
    },

  },
  modules: {
  }
})

