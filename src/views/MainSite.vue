<template>
    <div class="main">
        <navbar />
        <div class="main-container">
            <router-view />
        </div>
    </div>
</template>

<script>
import Navbar from "./../components/Navbar";

export default {
    components: {
        Navbar,
    },
    mounted() {
        let token = window.localStorage.getItem('dvlmp-token');

        if(token) {
            this.$router.push({name: 'customers.dashboard'})
        }
    },  
}
</script>

<style lang="scss" scoped>
    .main-container{
        height: calc(100vh - 74px);
    }
</style>

