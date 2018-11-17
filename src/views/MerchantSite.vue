<template>
    <div class="wrapper">
        <sidebar />

        <div id="content">
            <merchant-navbar />
            <div class="p-4">
                <router-view />
            </div>
        </div>

    </div>
</template>

<script>
import Sidebar from "./../components/merchant/Sidebar";
import MerchantNavbar from "./../components/merchant/MerchantNavbar";
export default {
    components: {
        Sidebar,
        MerchantNavbar,
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

