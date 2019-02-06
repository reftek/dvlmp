<template>
    <div>
        <div class="row align-items-center">
            <div class="col-12 col-md-6">
                
                <div class="row order-details shadow-sm py-3 mx-0 my-4 rounded align-items-center">
                    <div class="col-2 col-md-1">
                        <div class="order-img rounded" :style="{'background-image': 'url('+image+')'}"></div>
                    </div>
                    <div class="col ml-2">
                        <div class="bold-title order-merch">
                            {{ merchantName }}
                        </div>
                        <div class="rating order-merch">
                            <i class="mdi star-icon mdi-star small icon-blue"></i> 
                            {{ rating }}
                        </div>
                    </div>
                </div>
                
                <div class="main-container shadow-sm rounded mb-3">
                    <div class="ml-2 title-form pt-2">PICKUP INFO</div>
                    <div class="row justify-content-center p-2 mb-3">
                        <div class="col-12">
                            <form>
                                <div class="row">
                                    <div class="col-12 col-lg-6">
                                        <input type="email" class="form-control mb-2" placeholder="Item Description" required>
                                    </div>
                                    <div class="col-12 col-lg-6">
                                        <select class="form-control mb-2" required>
                                            <option disabled selected>Item Category</option>
                                            <option>Fragile</option>
                                            <option>Consumable/Foods</option>
                                            <option>Electronics</option>
                                            <option>Silverware</option>
                                        </select>                            
                                    </div>
                                    <div class="col-12 col-lg-6">
                                        <select class="form-control mb-2" required>
                                            <option disabled selected>Item Weight Class</option>
                                            <option>5-10 Tons</option>
                                            <option>11-20 Tons</option>
                                            <option>21-30 Tons</option>
                                            <option>31-40 Tons</option>
                                        </select>
                                    </div>
                                    <div class="col-12 col-lg-6">
                                        <select class="form-control mb-2" required>
                                            <option disabled selected>Pickup Contact</option>
                                            <option>5-10 Tons</option>
                                            <option>11-20 Tons</option>
                                            <option>21-30 Tons</option>
                                            <option>31-40 Tons</option>
                                        </select>
                                    </div>
                                    <div class="col-12 col-lg-6">
                                        <input type="email" class="form-control mb-2" placeholder="Pickup Address" required>
                                    </div>
                                    <div class="col-12 col-lg-6">
                                        <select class="form-control mb-2" required>
                                            <option disabled selected>Pickup City/Town</option>
                                            <option>5-10 Tons</option>
                                            <option>11-20 Tons</option>
                                            <option>21-30 Tons</option>
                                            <option>31-40 Tons</option>
                                        </select>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div class="main-container shadow-sm rounded pb-1 mb-3">
                    <div class="ml-2 title-form pt-2">DELIVERY INFO</div>
                    <div class="row justify-content-center p-2 mb-3">
                        <div class="col-12">
                            <form>
                                <div class="row">
                                    <div class="col-12 col-lg-6">
                                        <select class="form-control mb-2" required>
                                            <option disabled selected>Delivery Contact</option>
                                            <option>Fragile</option>
                                            <option>Consumable/Foods</option>
                                            <option>Electronics</option>
                                            <option>Silverware</option>
                                        </select>
                                    </div>
                                    <div class="col-12 col-lg-6">
                                        <select class="form-control mb-2" required>
                                            <option disabled selected>Delivery Contact</option>
                                            <option>Fragile</option>
                                            <option>Consumable/Foods</option>
                                            <option>Electronics</option>
                                            <option>Silverware</option>
                                        </select>
                                    </div>
                                    <div class="col-12 col-lg-12">
                                        <input type="email" class="form-control mb-2" placeholder="Delivery Address" required>
                                    </div>
                                    <div class="col-12 col-lg-6">
                                        <select class="form-control mb-2" required>
                                            <option disabled selected>Country</option>
                                            <option>Nigeria</option>
                                            <option>Sweden</option>
                                        </select>
                                    </div>
                                    <div class="col-12 col-lg-6">
                                        <select class="form-control mb-2" required>
                                            <option disabled selected>Delivery City/Town</option>
                                            <option>5-10 Tons</option>
                                            <option>11-20 Tons</option>
                                            <option>21-30 Tons</option>
                                            <option>31-40 Tons</option>
                                        </select>
                                    </div>
                                    <div class="col-12 col-lg-12">
                                        <textarea class="form-control" rows="5" placeholder="Delivery Notes"></textarea>
                                    </div>
                                </div>      
                            </form>
                        </div>
                    </div>
                </div>

            </div>
            <div class="col-md-6 d-none d-md-block">
                <div class="text-center">
                    <img src="./../../assets/images/delivery_woman.svg" class="w-75" />
                </div>
            </div>
        </div>
    
        <div class="row mt-3">
            <div class="col-12 col-md-4 col-lg-4">
                <button type="submit" class="btn py-3 btn-primary btn-block active">Book a new delivery</button>
            </div>
        </div>

</div>
</template>


<style lang="scss" scoped>
    .order-img{
        height: 50px;
        width: 55px;
        background-position: center, center;
        background-size: cover;
        background-repeat: no-repeat;
    }

    .bold-title{
        font-weight: 600;
        font-size: 0.8rem;
    }

    .order-merch{
        color: black;

        &.rating{
            font-size: 0.75rem;
            
            .icon-blue{
                color: blue;
            }
        }
    }

    .order-details{
        background-color: white;
    }

    .title-form{
        font-size: 0.68rem;
        font-weight: bold;
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

    .main-container{
        background-color: white;
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

