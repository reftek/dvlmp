<template>
    <div class="wrapper">
        <sidebar class="d-none d-md-block d-lg-block" />

        <div id="content">
            <customer-navbar />
            <div class="p-4">
                <router-view />
            </div>
        </div>

    </div>
</template>

<script>
import Sidebar from "./../components/customer/CustomerSidebar";
import CustomerNavbar from "./../components/customer/CustomerNavbar";
export default {
    components: {
        Sidebar,
        CustomerNavbar,
    }
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

