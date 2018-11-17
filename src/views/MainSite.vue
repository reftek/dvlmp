<template>
    <div class="main">
        <navbar class="mb-3" />
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

