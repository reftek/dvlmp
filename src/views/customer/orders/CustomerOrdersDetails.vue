<template>
    <div class="px-4" >
        <p class="mb-3">Order Details</p>
        <order-details  :orderId="order.id" 
                        :merchantName="order.merchantName" 
                        :orderDate="order.date" 
                        :status="order.status"
                        :rating="order.rating"
                        :orderDescription="order.description"
                        :image="order.image" 
                        />

        <order-item-details />
        <order-updates />
        <order-rate />
    </div>
</template>

<script>
import OrderDetails from "./../../../components/orders/OrderDetails";
import OrderUpdates from "./../../../components/orders/OrderUpdates";
import OrderRate from "./../../../components/orders/OrderRate";
import OrderItemDetails from "./../../../components/orders/OrderItemDetails";
export default {
    props: [
        'id'
    ],
    components: {
        OrderDetails,
        OrderItemDetails,
        OrderUpdates,
        OrderRate,
    },
    data(){
        return {
            order: {
                id: "ORD123",
                merchantName: 'Reftek',
                description: 'Power pack 5000mAh',
                date: '3 days ago',
                status: 'success',
                rating: 4.76,
                image: 'http://www.relatedfluidpower.com/wp-content/gallery/mini-power-units/Hydraulic-Power-Pack-Micro90-Gallery.jpg',
            },
            orders: [
                {
                    id: "ORD123",
                    merchantName: 'Reftek',
                    description: 'Power pack 5000mAh',
                    date: '3 days ago',
                    status: 'success',
                    rating: 4.76,
                    image: 'http://www.relatedfluidpower.com/wp-content/gallery/mini-power-units/Hydraulic-Power-Pack-Micro90-Gallery.jpg',
                },
                {
                    id: "ORD987",
                    merchantName: 'Dominos',
                    description: 'Dominios Pizza',
                    date: '5 days ago',
                    status: 'fail',
                    rating: 3.52,
                    image: 'https://trademe.tmcdn.co.nz/photoserver/plus/687646665.jpg',
                },
                {
                    id: "ORD744",
                    merchantName: 'GoKada',
                    description: 'Samsung S9 Large',
                    date: '2 days Ago',
                    status: 'pending',
                    rating: 4.35,
                    image: 'https://cdn0.vox-cdn.com/hermano/verge/product/image/8666/akrales_180305_2350_0401_squ.jpg'
                },
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
    p{
        color: black;
        font-size: 21px;
        font-weight: bold;
    }
</style>