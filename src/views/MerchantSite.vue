<template>
    <div class="wrapper">
        <sidebar :userImage="image"
                        :userName="user.name"
                        :isActive="isActiveSettings"/>

        <div id="content">
            <merchant-navbar />
            <div class="p-4">
                <router-view />
            </div>
        </div>

    </div>
</template>

<script>
import Sidebar from "./../components/merchant/MerchantSidebar";
import MerchantNavbar from "./../components/merchant/MerchantNavbar";
import axios from 'axios';

export default {
    data() {
        return {
            isLoggedIn: false,
            isActiveSettings: false,
            image: "https://www.placehold.it/50x50",
        }
    },
    computed: {
        user(){
            return this.$store.state.currentUser;
        },
    },
    components: {
        Sidebar,
        MerchantNavbar,
    },
    beforeCreate() {
        let token = this.$store.getters.getToken;
        if(token){
            axios.defaults.headers.common['Authorization'] = "Bearer "+token;
        } else if(!token) {
            this.$router.push({ name: 'main.login'});
        } else if(this.user.type == 'customer') {
            console.log('You cannot be here');
            this.$router.push({ name: 'customers.dashboard'});
        }
    },
    // mounted() {
    //     let token = window.localStorage.getItem('dvlmp-token');
    //     let userInfo = JSON.parse(window.localStorage.getItem('dvlmp-user-info'));

    //     if(userInfo.type == 'customer') {
    //         console.log('You cannot be here');
    //         this.$router.push({ name: 'customers.dashboard'});
    //     }

    //     console.log(userInfo);

    //     this.merchant = userInfo;
        
    //     if(!token) {
    //         this.$router.push({ name: 'main.login'});
    //     } else {
    //         this.isLoggedIn == true;
    //     }
    // }
}
</script>


<style lang="scss" scoped>
.wrapper {
    display: flex;
    width: 100%;
    align-items: stretch;
}
#content{
    width: 100%;
}
</style>

