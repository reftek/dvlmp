<template>
<div class="order-contain p-3 shadow-sm flex" >
    <div class="row">
        <div class="col">
            <div class="order-item">ORD1234</div>
        </div>
        <div class="col date">
            3 days ago
        </div>
    </div>
    <div class="row align-items-center mt-2">
        <div class="col-8">
            <div class="row align-items-center">
                <div class="col-5">
                    <div class="order-img"></div>
                </div>
                <div class="col pl-1 order-detail">
                    <div class="row">Portal Deliveries</div>
                    <div class="row">Item Description</div>
                </div>
            </div>
        </div>

        <div class="col-4 text-right">
            <div class="delivery-status px-2">
                Delivered
            </div>
        </div>
    </div>
</div>
</template>

<style lang="scss" scoped>
.order-contain{
        background-color: white;
        border-radius: 10px;
        // min-height: 70px;

        .date{
            text-align: right;
            font-size: 0.7rem;
        }

        .order-img{
            // align-self: left;
            background-color: #48C23A;
            height: 50px;
            width: 85%;
            
        }

        .order-detail{
            font-size: 0.8rem;

            div:nth-child(1) {
                color: black;
            }
        }

        .delivery-status{
            // background-color: green;
            // float: right;
            background-color: #48C23A;
            color: white;
            font-size: 0.6rem;
            display: inline-block;
            // max-height: 5px;
            // max-width: 10px;
        }
    }

    h2{
        color: black;
    }
    .order-item{
        font-size: 0.9rem;
        color: black; 
    }
</style>
