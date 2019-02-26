import Vue from 'vue'
import Vuex from 'vuex'

// modules
import app from './modules/app'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app
  }
})

export default store