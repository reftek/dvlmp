<template>
    <div class="main-container">
        <div class="row order-details shadow-sm mt-2 mb-3 pt-2 pb-1 rounded align-items-center">
            <div class="col-3">
                <div class="row pl-3 pt-2 pb-2"><img :src="image" class="order-img"></div>
            </div>
            <div class="col pl-2 order-merch">
                <div class="row pl-1 bold-title">{{ merchantName }}</div>
                <div class="row rating pt-1"><i class="mdi star-icon mdi-star small icon-blue"></i> &nbsp; {{ rating }}</div>
            </div>
        </div>

        <div class="container rounded shadow-sm mb-3">
            <div class="row form">
                <div class="title-form mb-2 mt-2">PICKUP INFO</div>
                <form class="">
                    <div class="form-row">
                        <div class="col-md-4 mb-3">
                            <input type="text" class="form-control" placeholder="Item Description" required>
                        </div>
                        <div class="col-md-4 mb-3">
                            <select name="" class="form-control">
                                <option>Item Category</option>
                            </select>
                        </div>
                        <div class="col-md-4 mb-3">
                            <select name="" class="form-control">
                                <option>Item Weight Class</option>
                            </select>
                        </div>
                        <div class="col-md-4 mb-3">
                            <select name="" class="form-control">
                                <option>Pickup Contact</option>
                            </select>
                        </div>
                        <div class="col-md-4 mb-3">
                            <input type="text" class="form-control"  placeholder="Pickup Address" required>
                        </div>
                        <div class="col-md-4 mb-3">
                            <select name="" class="form-control">
                                <option>Pickup City/Town</option>
                            </select>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        <div class="container rounded shadow-sm">
            <div class="row form">
                <div class="title-form mb-2 mt-2">DELIVERY INFO</div>
                <form class="">
                    <div class="form-row">
                        <div class="col-md-4 mb-3">
                            <select name="" class="form-control">
                                <option>Delivery Contact</option>
                            </select>
                        </div>
                        <div class="col-md-4 mb-3">
                            <input type="text" class="form-control" placeholder="Delivery Address" value="" required>
                        </div>
                        <div class="col-md-4 mb-3">
                            <select name="" class="form-control">
                                <option>Nigeria</option>
                            </select>
                        </div>
                        <div class="col-md-4 mb-3">
                            <select name="" class="form-control">
                                <option>Delivery City/Town</option>
                            </select>
                        </div>
                        <div class="col-md-4 mb-3">
                            <textarea class="form-control" rows="5">Delivery Notes</textarea>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        <div class="row button-div mt-3 " >
            <button type="submit" class="btn py-3 btn-primary btn-block active">Book Delivery</button>
        </div>

    </div>
</template>


<style lang="scss" scoped>
    .main-container{
        .order-img{
            height: 50px;
            width: 55px;
        }

        .bold-title{
            font-weight: 600;
            font-size: 0.8rem;
        }

        .order-merch{
            color: black;

            .rating{
                font-size: 0.75rem;
                
                .icon-blue{
                    color: blue;
                }
            }
        }

        .order-details{
            background-color: white;
            margin-left: 0.2px;
            margin-right: 0.2px;
        }

        .title-form{
            font-size: 0.68rem;
            color: blue;
        }

        .form{
            padding-left: 12px;
            padding-right: 12px;
        }

        .mdi::before{
            font-size: 15px;
            position:relative;
            top:-2.5px;
        }

        input{
            font-size: 0.75rem;
        }

        select{
            font-size: 0.75rem;
        }

        textarea{
            font-size: 0.75rem;
        }

        button{
            font-size: 0.8rem;
        }

        .button-div{
            margin-left: 0.2px;
            margin-right: 0.2px;
        }

        .container{
            background-color: white;
        }
    }
</style>

<script>
export default {
    props: [
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

