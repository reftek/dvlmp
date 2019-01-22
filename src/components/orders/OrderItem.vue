<template>
    <div class='row' @click="gotoOrderDetails(orderId)">
        <div class="order-contain p-3 shadow-sm flex col-md-12">
            <div class="row">
                <div class="col">
                    <div class="order-item">{{orderId}}</div>
                </div>
                <div class="col date">
                    {{orderDate}}
                </div>
            </div>
            <div class="row align-items-center mt-2">
                <div class="col-8">
                    <div class="row align-items-center">
                        <div class="col-5">
                            <!-- <div class="order-img"> -->
                            <img :src="image" alt="orderImage" class="order-img">
                            <!-- </div> -->
                        </div>
                        <div class="col pl-1 order-detail">
                            <div class="row">{{merchantName}}</div>
                            <div class="row">{{orderDescription}}</div>
                        </div>
                    </div>
                </div>

                <div class="col-4 text-right">
                    <div class="delivery-status px-2" v-if="status == 'success'">
                        Delivered
                    </div>
                    <div class="delivery-status status-red px-2" v-if="status == 'fail'">
                        Cancelled
                    </div>
                    <div class="delivery-status status-orange px-2" v-if="status == 'pending'">
                        Pending
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'orderId',
        'merchantName',
        'status',
        'orderDescription',
        'orderDate',
        'image'
    ],
    methods: {
        gotoOrderDetails(order_id){
            this.$router.push({
                name: 'customers.orders.details', 
                params: { 
                    id: order_id
                }
            });
        }
    }
}
</script>

<style lang="scss" scoped>
.order-contain{
        background-color: white;
        border-radius: 7px;

        .date{
            text-align: right;
            font-size: 0.7rem;
        }

        .order-img{
            // background-color: #48C23A;
            height: 50px;
            width: 85%;
        }

        .order-detail{
            font-size: 0.8rem;

            div:nth-child(1) {
                color: black;
            }
            div:nth-child(2){
                font-size: 0.7rem;
            }
        }

        .delivery-status{
            background-color: #48C23A;
            color: white;
            font-size: 0.6rem;
            display: inline-block;

            &.status-red{
                background-color: red;
            }

            &.status-orange{
                background-color: orange;
            }
        }
    }
    .order-item{
        font-size: 0.9rem;
        color: black; 
    }
</style>
