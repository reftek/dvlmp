<template>
    <div class='container flex pt-3 first-details align-items-center'>
        <div class="row align-items-center" @click="gotoMerchant(1)">
            <div class="col-3">
                <div class="order-img rounded" :style="{'background-image': 'url('+image+')'}"></div>
            </div>
            <div class="col">
                <div class="order-merch ml-2">{{ merchantName }}</div>
                <div class="rating pt-2 ml-2">
                    <i class="mdi mdi-18px mdi-star icon-blue"></i> 
                    {{ rating }}
                </div>
            </div>
        </div>
        <hr>
        <div class="row align-items-center">
            <div class="col-12"> 
                <div class="row mt-1 mb-3 ml-0 align-items-center">
                    <div class="param">Order Number:</div>  
                    <div class="ml-4 info">{{ orderId }}</div>
                </div>
                <div class="row mt-1 mb-3 ml-0 align-items-center">
                    <div class="param">Order Status: &nbsp;</div>
                    <div class="ml-4">
                        <div class="delivery-status px-2 text-right" v-if="status == 'success'">
                            Delivered
                        </div>
                        <div class="delivery-status text-right status-red px-2" v-if="status == 'fail'">
                            Cancelled
                        </div>
                        <div class="delivery-status text-right status-orange px-2" v-if="status == 'pending'">
                            Pending
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'id',
        'orderId',
        'merchantName',
        'status',
        'orderDescription',
        'orderDate',
        'image',
        'rating'
    ],
    methods: {
        gotoMerchant(merchant_id){
            console.log(9);
            this.$router.push({name: 'merchant.details', params: {id:merchant_id}});
        }
    }
}
</script>

<style lang="scss" scoped>
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
</style>
