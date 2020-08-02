import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex);

import app from './modules/app'
import temdata from './modules/temdata'

const store = new vuex.Store({
    modules: {
      app: app,
      temdata: temdata,
    }
})

export default store