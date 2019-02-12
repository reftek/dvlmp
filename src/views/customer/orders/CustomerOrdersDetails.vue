<template>
    <div class="p-4" >
        <p class="mb-3">Order Details</p>

        <div class='pt-3 first-details align-items-center px-3'>
            <div class="row align-items-center" @click="gotoMerchant(merchant_id)">
                <div class="col-3 col-lg-1">
                    <div class="order-img rounded" :style="{'background-image': 'url('+orderdummy.image+')'}"></div>
                </div>
                <div class="col ml-3">
                    <div class="order-merch">{{ orderdummy.merchantName }}</div>
                    <div class="rating pt-2">
                        <i class="mdi mdi-18px mdi-star icon-blue"></i> 
                        {{ orderdummy.rating }}
                    </div>
                </div>
            </div>
            <hr>
            <div class="row align-items-center">
                <div class="col-12"> 
                    <div class="mt-1 mb-3 ml-0 align-items-center">
                        <span class="param">
                            Order Number:
                            <span class="ml-4 info">ORD{{ order.id }}</span>
                        </span>  
                    </div>
                    <div class="mt-1 mb-3 ml-0 align-items-center">
                        <span class="param">Order Status: &nbsp;</span>
                        <span class="ml-4">
                            <span class="delivery-status px-2 text-right" v-if="order.status == 'success'">
                                Delivered
                            </span>
                            <div class="delivery-status text-right status-red px-2" v-if="order.status == 'fail'">
                                Cancelled
                            </div>
                            <div class="delivery-status text-right status-orange px-2" v-if="order.status == 'pending'">
                                Pending
                            </div>
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-4 main-container rounded pb-4 pt-2 px-3">
            <div class="row">
                <div class="col">
                    <div class="mb-1 bold">Item:</div>
                    <div class="detail">{{ order.item_description }}</div>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col">
                    <div class="mb-1 bold">Pick up Contact:</div>
                    <div class="detail">{{ order.pickup_contact }}</div>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col">
                    <div class="mb-1 bold">Delivery Contact:</div>
                    <div class="detail">{{ order.delivery_contact }}</div>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col">
                    <div class="mb-1 bold">Pick up Address:</div>
                    <div class="detail">{{ order.pickup_address }}</div>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col">
                    <div class="mb-1 bold">Delivery Address:</div>
                    <div class="detail">{{ order.delivery_address }}</div>
                </div>
            </div>
        </div>

        <div class="main-container1 mt-4 rounded-top px-3">
            <div class="row">
                <div class="col-12">
                    <div class="py-3 update">Updates:</div>
                </div>
                <div class="py-3 detail pl-3">Package picked up by 12:30pm</div>
            </div>
        </div>
        
        <div class="main-container2 mt-4 pt-2 pb-2 rounded">
            <div class="row">
                <div class="col">
                    <div class="text-center rate my-2">
                        RATE THIS SERVICE
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="text-center icoon rating mt-2 mb-1 ml-2">
                        <i class="mdi mdi-32px mdi-star small"></i>
                        <i class="mdi mdi-32px mdi-star small"></i> 
                        <i class="mdi mdi-32px mdi-star small"></i>
                        <i class="mdi mdi-32px mdi-star small"></i>
                        <i class="mdi mdi-32px mdi-star-outline small"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    props: [
        // 'orderId'
    ],
    data(){
        return {
            order: [],
            orderdummy: {
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
    methods: {
        gotoMerchant(merchant_id) {
            merchant_id = this.order.merchant_id;
            let url = 'http://127.0.0.1:8000/api/merchant/' + merchant_id ;

            axios.get(url)
                .then(response => {
                    let result = response.data;

                    if(result.status == true){
                        window.localStorage.setItem('dvlmp-merchant', JSON.stringify(result.data));
                        this.$router.push({name: 'merchant.details', params: {id:merchant_id}});
                    }
                })
            
            
        }
    },
    mounted() {
        let order = JSON.parse(window.localStorage.getItem('dvlmp-orders-item'));
        this.order = order;
        console.log(this.order);
    }
}
</script>

<style lang="scss" scoped>
p{
    color: black;
    font-size: 21px;
    font-weight: bold;
}

.first-details{
background-color: white;
border-radius: 6px;
border: 0.5px solid rgb(209, 208, 208);

.order-img{
    height: 75px;
    width: 80px;
    background-position: center, center;
    background-size: cover;
    background-repeat: no-repeat;
}

.order-merch{
    color: black;
    font-weight: 500;

    div:nth-child(2){
        color: black;
        font-size: 0.8rem;
    }
}

.order-details{
    font-size: 0.9rem;
    color: black;
}

.icon-blue{
    color: blue;
}

.delivery-status{
    background-color: #48C23A;
    color: white;
    font-size: 0.8rem;
    display: inline-block;
    border-radius: 2px;

    &.status-red{
        background-color: red;
    }

    &.status-orange{
        background-color: orange;
    }
 }
}

.rating{
    font-size: 0.8rem;
}

.mdi::before{
    position: relative;
    top: -2.5px;
}

.info{
    color: black;
    font-size: 0.85rem;
    font-weight: 600;
}

.param{
    font-size: 0.9rem;
    color: black;
}


.main-container{
    background-color: white;
    border-radius: 0px;
    border: 0.5px solid rgb(209, 208, 208);

    .detail{
        font-size: 0.7rem;
    }

    .col{
        margin-top: 10px;
    }
    .col div:first-of-type{
        margin-bottom: 0.1rem;
        font-weight: 600;
        font-size: 0.8rem;
    }
}

.main-container1{
        background-color: white;
        border: 0.5px solid rgb(209, 208, 208);

        .update{
            font-size: 0.8rem;
            font-weight: bold;
        }

        .detail{
            width: 100%;
            font-size: 0.7rem;
            margin-bottom: 0px;
            background-color: #f5f5f5;
            background-size: cover;
            border-top: 0.5px solid rgb(216, 215, 215);
            border-bottom: 0.5px solid rgb(216, 215, 215);
    }
}

.main-container2{
    background-color: white;
    border: 0.5px solid rgb(209, 208, 208);;

    .rating{
        color: blue;
        
        .mdi::before {
            font-size: 37px;
        }
    }

    .rate{
        color: black;
        font-weight: 600;
        font-size: 0.75rem;
    }

    .icoon{
    letter-spacing: 1.2rem;
}
}


</style>