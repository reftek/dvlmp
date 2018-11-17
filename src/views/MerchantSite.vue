<template>
    <div class="wrapper">

        <!-- Sidebar -->
        <sidebar />

        <!-- Page Content -->
        <div id="content">
            <!-- We'll fill this with dummy content -->
        </div>

    </div>
</template>

<script>
import Sidebar from "./../components/merchant/Sidebar";
export default {
    components: {
        Sidebar,
    }
}
</script>


<style lang="scss" scoped>
.wrapper {
    display: flex;
    width: 100%;
    align-items: stretch;
}
</style>

