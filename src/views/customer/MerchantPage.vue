<template>
    <div class="p-4">
        <div class="row justify-content-center">
            <div class="col-12 col-md-6">

                <div class="main-container shadow-sm pt-4 pb-4 rounded">
                    <div class="row justify-content-center">
                        <div class="col-12 text-center">
                            <div class="rounded order-img" :style="{'background-image': 'url('+image+')'}"></div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <div class="mt-2 mb-3 merch text-center text-capitalize">
                                {{ merchant.company_name }}
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-5 col-md-4 pr-2">
                            <div class="red rounded">
                                <div class="rate mt-2 text-center">
                                    RATE
                                </div>
                                <div class="comp-del text-center pt-2">
                                    <i class="mdi mdi-star icon-blue"></i> {{ order.rating }}
                                </div>
                            </div>
                        </div>
                        <div class="col-5 col-md-4 pl-2">
                            <div class="red rounded">
                                <div class="rate text-nowrap mt-2 text-center">
                                    COMPLETED DELIVERIES
                                </div>
                                <div class="comp-del text-center pt-2">
                                    <i class="mdi mdi-checkbox-marked-circle icon-green"></i> 152
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-12 col-md-10">
                            <div class="lorem pt-2 mt-2 text-center">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eleifend facilisis mollis. In in dolor sed lectus malesuada hendrerit in ac est. 
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-8 col-md-6">
                            <div class="intl-ship mt-3 card rounded px-2 py-2"> 
                                <div class="text-center"> <i class="mdi int mdi-airplane icon-blue"></i> International Shipping</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        
        <div class="row justify-content-center" >
            <div class="col-12 col-md-4">
                <div>
                    <button type="submit" class="btn mt-4 mb-3 py-3 btn-primary btn-block active" @click="gotoNewOrder">Book a new Delivery</button>
                </div>
            </div>
        </div>

        <div class="row justify-content-center"> 
            <div class="col-12 col-md-10">
                <div class="rev-title ml-1 mt-4 mb-3">Reviews</div>
           
                <div class="main-container shadow-sm rounded mt-2 mb-3 py-2 px-3" v-for="item in 4" :key="item">
                    <div class="row">
                        <div class="col-12">
                            <div class="lorem my-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eleifend facilisis mollis. </div>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-6">
                            <div class="review">James Bond</div> 
                        </div>
                        <div class="col-6">
                            <div class="time review">2 days ago</div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    methods:{
        gotoNewOrder(){
            this.$router.push({name: "customers.orders.new"});
        }
    },
    data(){
        return {
            image: 'https://media.licdn.com/dms/image/C4E0BAQFZdNRgLdvvCA/company-logo_400_400/0?e=1557964800&v=beta&t=2Bl5jaVt7hSGE1mE56-ANr3l4_AwhzdDNSz0BFUnh9U',
            order: {
                id: "ORD123",
                merchantName: 'Reftek',
                description: 'Power pack 5000mAh',
                date: '3 days ago',
                status: 'success',
                rating: 4.76,
                image: 'https://images.techhive.com/images/article/2016/10/scalable_design_left2x-100690324-large.jpg',
            },
        }
    },
    computed: {
        merchant() {
            return this.$store.getters.getThisMerchant;
        }
    },
    mounted() {
        let id = this.$route.params.id
        this.$store.dispatch('retrieveThisMerchant', id);
    },
}
</script>

<style lang="scss" scoped>
.main-container{
    background-color: white;

    .order-img{
        height: 125px;
        width: 125px;
        background-position: center, center;
        background-size: cover;
        background-repeat: no-repeat;
        margin: auto;
    }

    .mdi::before{
        font-size: 20px;
        position:relative;

        &.star-icon{
            top:-0.5px;
        }
    }

    .rate{
        font-size: 0.6rem;
        justify-content: center;
    }

    .rating{
        font-size: 0.8rem;
        justify-content: center;
        color: black;
    }

    .merch{
        color: black;
        font-size: 1rem;
    }

    .intl-ship{
        font-size: 0.78rem;
        color: black;

        .mdi::before{
            transform: rotate(45deg); 
        }
    }

    .comp-del{
        font-size: 0.8rem;
        color: black;
    }
}

.rev-title{
    font-size: 1.1rem;
    color: black;
    font-weight: bold;
}

.review{
    font-size: 0.73rem;
}

.lorem{
    font-size: 0.8rem;
    color: black;
}

.time{
    text-align:right;
}

.icon-blue{
    color: blue;
}

button{
    font-size: 0.75rem;
}

.red{
    background-color: white;
    height: 60px;
    border: 0.5px solid #C4C4C4;
}

.icon-green{
    color: green;
}
</style>
