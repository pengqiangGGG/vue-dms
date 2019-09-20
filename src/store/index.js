import Vue from 'vue'
import Vuex from 'vuex'
import bread from './modules/breadMenuList'

Vue.use(Vuex)

const getters = {
    list:state=>state.bread.list
}

const store = new Vuex.Store({
    modules: {
        bread
    },
    getters
})

export default store;
