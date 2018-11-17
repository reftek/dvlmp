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
    }    
}
</script>

<style lang="scss" scoped>
    .main-container{
        height: calc(100vh - 74px);
    }
</style>

