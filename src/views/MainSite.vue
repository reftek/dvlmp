<template>
    <div class="main">
        <navbar />
        <router-view />
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
    .main{
        height: calc(100vh - 74px);
    }
</style>

