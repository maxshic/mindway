import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
    storage: window.sessionStorage //指定vuex存储方式
})

const store = new Vuex.Store({
    state: {
        
    },
    getters: {
        
    },
    mutations: {
        
    },
    actions: {
        
    },
    plugins: [vuexLocal.plugin]
})

export default store