import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        sideBar: false,
    },
    getters: {
        getSideBarStatus(state){
            return state.sideBar;
        }
    },
    mutations: {
        toggleSideBar(state, status){
            state.sideBar = status;
        }
    },
    actions: {

    }
});