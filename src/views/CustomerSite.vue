<template>
    <div class="wrapper" id="app">
        <slide class="bb" :burgerIcon="false" :crossIcon="false" :isOpen="sideBarOpen" @closeMenu="handleCloseSidebar">
            <sidebar />
        </slide>

        <div id="page-wrap">
            <customer-navbar />
            <div class="p-4">
                <router-view />
            </div>
        </div>

    </div>
</template>

<script>
import { Reveal } from 'vue-burger-menu';
import Sidebar from "./../components/customer/CustomerSidebar";
import CustomerNavbar from "./../components/customer/CustomerNavbar";

export default {
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

