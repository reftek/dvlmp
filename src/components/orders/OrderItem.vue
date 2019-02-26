<template>
        <div class="order-contain p-3 shadow-sm flex" @click="gotoOrderDetails(orderId)">
            <div class="row">
                <div class="col">
                    <div class="order-item">
                        ORD{{orderId}}
                    </div>
                </div>
                <div class="col">
                    <div class="date">
                        {{orderDate}}
                    </div>
                </div>
            </div>
            <div class="row align-items-center mt-2">
                <div class="col-8">
                    <div class="row align-items-center">
                        <div class="col-5">
                            <img :src="image" alt="orderImage" class="order-img rounded">
                        </div>
                        <div class="col pl-1 order-detail">
                            <div class="row">
                                <div>
                                    {{merchantName}}
                                </div>
                            </div>
                            <div class="row">
                                <div>
                                    {{orderDescription}}
                                </div>
                            </div>
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
</template>

<script>
import axios from 'axios';

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
        gotoOrderDetails(orderId){   
            this.$router.push({name: 'customers.orders.details', params: {id:orderId}});
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
            height: 50px;
            width: 85%;
            background-position: center, center;
            background-repeat: no-repeat;
            background-size: cover;
        }

        .order-detail{
            font-size: 0.85rem;

            div:nth-child(1) {
                color: black;
            }
            div:nth-child(2){
                font-size: 0.75rem;
            }
        }

        .delivery-status{
            background-color: #48C23A;
            color: white;
            font-size: 0.6rem;
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
    .order-item{
        font-size: 0.9rem;
        color: black; 
    }
</style>
