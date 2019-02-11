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
            isLoggedIn: false,
            isActiveSettings: false,
            image: "https://www.placehold.it/50x50",
            user:
                {
                    id: '',
                    name: '',
                    // image: "https://media.licdn.com/dms/image/C5603AQGhKcxOqCjaPQ/profile-displayphoto-shrink_800_800/0?e=1554940800&v=beta&t=qBJskR6Z2ZJP4TC91dlnp-ksy99QrJWBybIFOajWSxU",
                    image: "https://www.placehold.it/50x50",
                    // backgroundUrl: require("./../../assets/images/profile_pic.png"),
                },
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
        }
    },
    methods: {
        handleCloseSidebar(){
            this.$store.commit("toggleSideBar", false);
        }
    },
    mounted() {
        let token = window.localStorage.getItem('dvlmp-token');
        let userInfo = JSON.parse(window.localStorage.getItem('user-info'));

        console.log(userInfo);

        this.user = userInfo;
        
        if(!token) {
            this.$router.push({ name: 'main.login'});
        } else {
            this.isLoggedIn == true;
            console.log("i am setting token ooo - "+token);
            axios.defaults.headers.common['Authorization'] = "Bearer "+token;

            console.log(axios.defaults);
        }
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
}
</style>

