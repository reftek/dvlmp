import Vue from 'vue';
import Vuex from 'vuex';

// import { allContacts } from './data/contacts.js';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        sideBar: false,
        isLoading: true,
        contacts: [],
        merchants: [],
        orders: [],
        merchant: {},
        order: {},
        contact: {},
    },
    getters: {
        getSideBarStatus(state){
            return state.sideBar;
        },
        getIsLoadingStatus(state){
            return state.isLoading;
        },
        getContacts(state) {
            return state.contacts;
        },
        getThisContact(state) {
            return state.contact;
        },
        getMerchants(state) {
            return state.merchants;
        },
        getThisMerchant(state) {
            return state.merchant;
        },
        getDeliveries(state) {
            return state.orders;
        },
        getThisDelivery(state) {
            return state.order;
        },
    },
    mutations: {
        toggleSideBar(state, status){
            state.sideBar = status;
        },
        toggleIsLoading(state, status){
            state.isLoading = status;
        },
        retrieveContacts(state)
        {
            axios.get('http://127.0.0.1:8000/api/contact')
            .then(response => {
                let result = response.data;

                if(result.status === true) {
                    state.contacts = result.data;
                    state.isLoading = false;
                    // console.log(result.data);
                }
            })
        },
        retrieveMerchants(state)
        {
            axios.get('http://127.0.0.1:8000/api/merchant')
            .then(response => {
                let result = response.data;

                if(result.status === true) {
                    state.merchants = result.data;
                    state.isLoading = false;
                    // console.log(result.data);
                }
            })
        },
        retrieveDeliveries(state)
        {
            axios.get('http://127.0.0.1:8000/api/orders')
            .then(response => {
                let result = response.data;

                if(result.status === true) {
                    state.orders = result.data;
                    console.log(state.orders)
                    state.isLoading = false;
                }
            })
        },
        retrieveThisMerchant(state, payload)
        {
            let url = 'http://127.0.0.1:8000/api/merchant/' + payload ;

            axios.get(url)
                .then(response => {
                    let result = response.data;

                    if(result.status == true){
                        state.merchant = result.data;
                    }
                })
        },
        retrieveThisDelivery(state, payload)
        {
            let url = 'http://127.0.0.1:8000/api/delivery/' + payload ;

            axios.get(url)
                .then(response => {
                    let result = response.data;

                    if(result.status == true){
                        state.order = result.data;
                    }
                })
        },
        retrieveThisContact(state, payload)
        {
            let url = 'http://127.0.0.1:8000/api/contact/' + payload ;

            axios.get(url)
                .then(response => {
                    let result = response.data;

                    if(result.status == true){
                        state.contact = result.data;
                    }
                })
        }
    },
    actions: {
        retrieveContacts(context) {
            context.commit('retrieveContacts');
        },
        retrieveMerchants(context) {
            context.commit('retrieveMerchants');
        },
        retrieveDeliveries(context) {
            context.commit('retrieveDeliveries');
        },
        retrieveThisMerchant: ({ commit }, payload) => {
            commit('retrieveThisMerchant', payload);
        },
        retrieveThisDelivery: ({ commit }, payload) => {
            commit('retrieveThisDelivery', payload);
        },
        retrieveThisContact: ({ commit }, payload) => {
            commit('retrieveThisContact', payload);
        }
    }
});