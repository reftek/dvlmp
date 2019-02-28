<template>
    <div class="wrapper" id="app">
        <slide class="bb" :burgerIcon="false" :crossIcon="false" :isOpen="sideBarOpen" @closeMenu="handleCloseSidebar">
            <sidebar :userImage="image"
                        :userName="user.name"
                        :isActive="isActiveSettings"
                        />
        </slide>

        <div id="page-wrap">
            <customer-navbar />
            <div class="">
                <router-view />
            </div>
        </div>

    </div>
</template>

<script>
import { Reveal } from 'vue-burger-menu';
import Sidebar from "./../components/customer/CustomerSidebar";
import CustomerNavbar from "./../components/customer/CustomerNavbar";
import axios from 'axios';

export default {
    data() {
        return {
            isActiveSettings: false,
            image: "https://www.placehold.it/50x50",
        }
    },
    components: {
        Sidebar,
        CustomerNavbar,
        Slide: Reveal,
    },
    computed: {
        sideBarOpen(){
            return this.$store.getters['getSideBarStatus'];
        },
        isLoggedIn() {
            return this.$store.getters.getIsLoggedInStatus;
        },
        user(){
            return this.$store.getters.getCurrentUser;
        },
    },
    methods: {
        handleCloseSidebar(){
            this.$store.commit("toggleSideBar", false);
        }
    },
    beforeCreate() {
        let token = this.$store.getters.getToken;
        if(token){
            axios.defaults.headers.common['Authorization'] = "Bearer "+token;
        } else if(!token) {
            this.$router.push({ name: 'main.login'});
        } else if(this.user.type == 'merchant') {
            console.log('You cannot be here');
            this.$router.push({ name: 'merchants.dashboard'});
        }
    },
    mounted() {
        // let token = this.$store.getters.getToken;
        
        console.log('hey');
        // console.log(this.$store.getters.getToken)
        // console.log(this.$store.getters.getCurrentUser)
    }
}
</script>

<style lang="scss" scoped>
// .wrapper {
//     display: flex;
//     width: 100%;
//     align-items: stretch;
// }
#page-wrap{
    width: 100%;
    min-height: 100vh;
    // z-index: 200;
}
</style>

