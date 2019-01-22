<template>
    <div>
        <h2 class="mb-3">Order History</h2>

        <order-item class="mb-3" :orderId="order.id" v-for="order in orders" :key="order.id" />
    </div>
</template>

<script>
import OrderItem from "./../../components/orders/OrderItem";
export default {
    components: {
        OrderItem
    },
    data(){
        return {
            orders: [
                {
                    id: "ORD123",
                    merchantName: 'Reftek',
                },
                {
                    id: "ORD987",
                    merchantName: 'GodKada',
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
</style>