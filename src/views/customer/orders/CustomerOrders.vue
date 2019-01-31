<template>
    <div class="p-4">
        <div class="row mb-4 align-items-center">
            <div class="col">
                <div class="title-head">Order History</div>
            </div>
            <div class="col">
                <div class="text-right">
                    <button class="btn btn-primary btn-small" @click="gotoNewOrder">New Delivery</button>
                </div>
            </div>
        </div>

        <div class="row wrap">
            <div class="col-md-12 col-lg-3 mb-2"  v-for="order in orders" :key="order.id">
                <order-item :orderId="order.id" 
                    :merchantName="order.merchantName" 
                    :orderDate="order.date" 
                    :status="order.status"
                    :orderDescription="order.description"
                    :image="order.image"
                        class="mb-3 pointer" />
            </div>
        </div>
        

    </div>
</template>

<script>
import OrderItem from "./../../../components/orders/OrderItem";
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
                    description: 'Power pack 5000mAh',
                    date: '3 days ago',
                    status: 'success',
                    image: 'http://www.relatedfluidpower.com/wp-content/gallery/mini-power-units/Hydraulic-Power-Pack-Micro90-Gallery.jpg',
                },
                {
                    id: "ORD987",
                    merchantName: 'Dominos',
                    description: 'Dominios Pizza',
                    date: '5 days ago',
                    status: 'fail',
                    image: 'https://trademe.tmcdn.co.nz/photoserver/plus/687646665.jpg',
                },
                {
                    id: "ORD744",
                    merchantName: 'GoKada',
                    description: 'Samsung S9 Large',
                    date: '2 days Ago',
                    status: 'pending',
                    image: 'https://cdn0.vox-cdn.com/hermano/verge/product/image/8666/akrales_180305_2350_0401_squ.jpg'
                },
            ]
        }
    },
    methods: {
        gotoNewOrder(){
            this.$router.push({name: "customers.orders.new"});
        }
    }
}
</script>

<style lang="scss" scoped>
    .title-head{
        color: black;
        font-size: 21px;
        font-weight: bold;
    }

    .btn-small{
        font-size: 0.8rem;
    }
</style>