<template>
    <div>
        <h2 class="mb-3">Order History</h2>

        <order-item class="mb-3" v-for="item in 4" :key="item" />
    </div>
</template>

<script>
import OrderItem from "./../../components/orders/OrderItem";
export default {
    components: {
        OrderItem
    }
}
</script>

<style lang="scss" scoped>
</style>