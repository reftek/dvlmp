<template>
    <div class="p-4">
        <div class="title-head">New Delivery</div>
        <div>
            <new-delivery :orderId="order.id" 
                        :merchantName="order.merchantName" 
                        :orderDate="order.date" 
                        :status="order.status"
                        :rating="order.rating"
                        :orderDescription="order.description"
                        :image="order.image" />
        </div> 
    </div>
</template>

<script>
import NewDelivery from "./../../../components/delivery/NewDelivery";
export default {
    components: {
        NewDelivery,
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
        }
    },
}
</script>

<style lang="scss" scoped>
    .title-head{
        color: black;
        font-size: 1.5rem;
        font-weight: bold;
    }
</style>