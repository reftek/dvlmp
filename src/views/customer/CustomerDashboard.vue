<template>
    <div>
        <div class="row mt-3 mx-0" >
            <button type="submit" class="btn btn-div py-3 mb-4 btn-primary btn-block active">Book a new Delivery</button>
        </div>

        <div class="row mb-3">
            <div class="col-8 black">Recent Orders</div>
            <div class="col-4 text-right">
                <button type="submit" class="btn py-1 btn-small btn-primary active">VIEW ALL</button>
            </div>
        </div>

        
        <div class="wrapper rounded mb-3 shadow-sm">
            <div class="container p-2">
                <div class="row align-items-center">
                    <div class="col order-id">{{ order.id }}</div>
                    <div class="col order-date text-right">{{ order.date }}</div>
                </div>
                <div class="row align-items-center my-1">
                    <div class="col-3">
                        <img :src="order.image" alt="" height="28px" width="30px" class="rounded">
                    </div>
                    <div class="col ml-1">
                        <div class="row order-merch black">{{ order.merchantName }}</div>
                        <div class="row status black">
                            Order Status: &nbsp;
                                <div class="delivery-status px-1" v-if="order.status == 'success'">
                                    Delivered
                                </div>
                                <div class="delivery-status status-red px-2" v-if="order.status == 'fail'">
                                    Cancelled
                                </div>
                                <div class="delivery-status status-orange px-2" v-if="order.status == 'pending'">
                                    Pending
                                </div>
                        </div>                    
                    </div>
                </div> <hr>
                <div class="col pt-2 mb-5">
                    <div class="row description">Description</div>
                </div>
                <button type="submit" class="btn btn-block detail-btn py-1 btn-primary active">View Details</button>
        </div>
        </div>

        <div class="row mb-3">
            <div class="col-8 black">Favourite Merchants</div>
            <div class="col-4 text-right">
                <button type="submit" class="btn py-1 btn-small btn-primary active" @click="gotoAllMerchants">VIEW ALL</button>
            </div>
        </div>

        <merchant-card :orderImage="order.image"
                       :merchantName="order.merchantName"
                       :orderRating="order.rating"/>

        <div class="row mb-3">
            <div class="col-8 black">Favourite Contacts</div>
            <div class="col-4 text-right">
                <button type="submit" class="btn py-1 btn-small btn-primary active">ADD NEW</button>
            </div>
        </div>

        <contact-card :image="image"
                        v-for="item in 4" :key="item"/>

        

    </div>
</template>

<script>
import ContactCard from './../../components/customer/ContactCard';
import MerchantCard from './../../components/customer/MerchantCard';
export default {
    components: {
        ContactCard,
        MerchantCard,
    },
    data() {
        return {
            order: {
                id: 'ORD123',
                merchantName: 'Reftek',
                status: 'success',
                date: '3 days ago',
                rating: 4.72,
                image: 'https://trademe.tmcdn.co.nz/photoserver/plus/687646665.jpg',
            },
            image: "https://www.beweship.com/wp-content/uploads/2017/04/beweship-contact-placeholder.jpg",
        }
    },
    methods: {
        gotoAllMerchants(){
            return this.$router.push({ name: 'merchant.all' });
        }
    }
}
</script>

<style lang="scss" scoped>
.wrapper{
    max-width: 170px;
    min-height: 146px;
    background-color: white;

    .order-id{
        font-size: 0.6rem;
        color: black;
    }

    .order-date{
        font-size: 0.5rem;
   }

   .order-merch{
       font-size: 0.65rem;
   }

   .status{
       font-size: 0.6rem;
   }

   .description{
        font-size: 0.6rem;
    }

    .detail-btn{
        font-size: 0.6rem;
        position: relative;
        // top: 100%;
        display: inline-block;
    }

}

.btn-small{
    font-size: 0.5rem;
}

.order-img{
    height: 25px !important;
    width: 25px !important;
}

.delivery-status{
    background-color: #48C23A;
    color: white;
    font-size: 0.5rem;
    display: inline-block;
    border-radius: 2px;

    &.status-red{
        background-color: red;
    }

    &.status-orange{
        background-color: orange;
    }
}

.black{
    color: black;
}

hr{
    margin-top: 0.5rem;
    margin-bottom: 0rem;
    position: relative;
}

.btn-div{
    font-size: 0.8rem;
}
</style>