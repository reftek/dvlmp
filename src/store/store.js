import Vue from 'vue';
import Vuex from 'vuex';

// import { allContacts } from './data/contacts.js';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        currentUser: JSON.parse(window.localStorage.getItem('dvlmp-user')),
        token: window.localStorage.getItem('dvlmp-token') || "",
        sideBar: false,
        isLoading: true,
        isLoggedIn: false,
        contacts: [],
        merchants: [],
        orders: [],
        merchant: {},
        order: {},
        contact: {},
        errorMessage: {},
    },
    getters: {
        getCurrentUser: (state) => {
            return state.currentUser;
        },
        getToken: (state) => {
            return state.token;
        },
        getSideBarStatus: (state) => {
            return state.sideBar;
        },
        getIsLoadingStatus: (state) => {
            return !state.isLoading;
        },
        getIsLoggedInStatus: (state) => {
            return !!state.token;
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
        toggleSideBar: (state, status) => {
            state.sideBar = status;
        },
        toggleIsLoading: (state, status) => {
            state.isLoading = status;
        },
        retrieveContacts: (state, payload) => {
            state.contacts = payload;
            // state.isLoading = false;
        },
        retrieveMerchants: (state, payload) => {
            state.merchants = payload;
            // state.isLoading = false; 
        },
        retrieveDeliveries: (state, payload) => {
            state.orders = payload;
            // state.isLoading = false;
        },
        retrieveThisMerchant: (state, payload) => {
            let url = 'http://127.0.0.1:8000/api/merchant/' + payload ;

            axios.get(url)
                .then(response => {
                    let result = response.data;

                    if(result.status == true){
                        state.merchant = result.data;
                    }
                })
        },
        retrieveThisDelivery: (state, payload) => {
            let url = 'http://127.0.0.1:8000/api/delivery/' + payload ;

            axios.get(url)
                .then(response => {
                    let result = response.data;

                    if(result.status == true){
                        state.order = result.data;
                    }
                })
        },
        retrieveThisContact: (state, payload) => {
            let url = 'http://127.0.0.1:8000/api/contact/' + payload ;

            axios.get(url)
                .then(response => {
                    let result = response.data;

                    if(result.status == true){
                        state.contact = result.data;
                    }
                })
        },
        currentUser: (state, payload) => {
            window.localStorage.setItem('dvlmp-user', JSON.stringify(payload));
            state.currentUser = JSON.parse(window.localStorage.getItem('dvlmp-user'));
        },
        login: (state) => {
            state.isLoggedIn = true;
        },
        logoutUser: (state) => {
            window.localStorage.removeItem('dvlmp-token')
            window.localStorage.removeItem('dvlmp-user')
            state.isLoggedIn = false;
        }
    },
    actions: {
        loginUser: ({commit}, payload) => {
            return new Promise((resolve, reject) => {
                axios.post('http://127.0.0.1:8000/api/auth/login', payload)
                .then(response => {
                    let result = response.data;
                    
                    if (result.status == true) {

                        let token = result.data.token;
                        let user = result.data.user;
                        window.localStorage.setItem('dvlmp-token', token);
                        axios.defaults.headers.common['Authorization'] = "Bearer "+token;
                        
                        commit('currentUser', user);
                        commit('login');
                    } else {
                        console.log('sorry yo')
                    }
                    resolve(response)
                }) .catch(e => {
                        console.log('sorry')
                        reject(e);
                    })
            })
        } ,
        retrieveContacts: ({ commit }) => {
            return new Promise ((resolve, reject) => {
                axios.get('http://127.0.0.1:8000/api/contact')
                .then(response => {
                    let result = response.data;

                    if(result.status === true) {
                        commit('retrieveContacts', result.data)
                    }
                    resolve(response)
                }).catch(e => {
                    console.log('sorry')
                    reject(e);
                })
            }) 
        },
        retrieveMerchants: ({ commit }) => {
            return new Promise ((resolve, reject) => {
                axios.get('http://127.0.0.1:8000/api/merchant')
                .then(response => {
                    let result = response.data;

                    if(result.status === true) {
                        commit('retrieveMerchants', result.data)
                    }

                    resolve(response)
                }).catch(e => {
                    console.log('sorry')
                    reject(e);
                })
            })
            
        },
        retrieveDeliveries: ({ commit }) =>{
            return new Promise ((resolve, reject) => {
                axios.get('http://127.0.0.1:8000/api/orders')
                .then(response => {
                    let result = response.data;

                    if(result.status === true) {
                        commit('retrieveDeliveries', result.data)
                    }

                    resolve(response)
                }).catch(e => {
                    console.log('sorry')
                    reject(e);
                })
            })
            
        },
        retrieveThisMerchant: ({ commit }, payload) => {
            commit('retrieveThisMerchant', payload);
        },
        retrieveThisDelivery: ({ commit }, payload) => {
            commit('retrieveThisDelivery', payload);
        },
        retrieveThisContact: ({ commit }, payload) => {
            commit('retrieveThisContact', payload);
        },
        logoutUser: ({ commit }) => {
            commit('logoutUser');
        }
    }
});