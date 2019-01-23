<template>
    <div class='container flex pt-3 first-details align-items-center'>
        <div class="row align-items-center">
            <div class="col-4">
                <div><img :src="image" class="order-img"></div>
            </div>
            <div class="col order-merch">
                <div class="row pl-1">{{ merchantName }}</div>
                <div class="row rating pt-2"><i class="mdi mdi-18px mdi-star small icon-blue"></i> &nbsp; {{ rating }}</div>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col align-items-center ml-3 mb-3 order-details">
                <div class="row mt-1 mb-3">Order Number: <div class="ml-4 info">{{ orderId }}</div></div>
                    <div class="row">Order Status: &nbsp; &nbsp;
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
        }

        .order-merch{
            div:nth-child(1) {
                color: black;
                font-weight: 600;
            }
            div:nth-child(2){
                color: black;
                font-size: 0.8rem;
            }
        }

        .order-details{
            font-size: 0.9rem;
            color: black;

            .info{
                font-weight: 600;
            }
        }

        i.icon-blue{
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
</style>
