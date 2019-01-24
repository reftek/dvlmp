<template>
    <div>
        <!-- <div class="bg-white shadow-sm p-2 text-center rounded">
            Hello
        </div> -->

        <div class="container shadow-sm pt-4 pb-4 rounded">
            <div class="row justify-content-center">
                    <img :src="order.image" class="rounded order-img">
            </div>
            <div class="row mt-2 merch justify-content-center">
                {{ order.merchantName }}
            </div>
            <div class="row mt-2 justify-content-center">
                <div class="my-col mr-1 card">
                    <div class="row rate pt-2 pb-3">RATING</div>
                    <div class="row rating pb-3"><i class="mdi star-icon mdi-star small icon-blue"></i> &nbsp; {{ order.rating }}</div>
                </div>
                <div class="my-col card comp-del">
                   <div class="row rate pt-2 pb-3 pl-1">COMPLETED DELIVERIES</div>
                    <div class="row rating pb-3"><i class="mdi mdi-check-circle icon-green"></i> &nbsp; 152</div>
                </div>
            </div>
            <div class="row lorem px-3 pt-2 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eleifend facilisis mollis. In in dolor sed lectus malesuada hendrerit in ac est. 
            </div>
            <div class="row intl-ship mt-3">
                <div class=" card rounded px-3 py-2"><i class="mdi int mdi-airplane icon-blue"></i><div> &nbsp; &nbsp;&nbsp;&nbsp;  International Shipping</div></div>
            </div>
        </div>
        
        <div class="row button-div mt-4 mb-3 pl-3 pr-3" >
            <button type="submit" class="btn py-3 btn-primary btn-block active">Book a new Delivery</button>
        </div>

        <div class="row rev-title ml-1 my-4"> Reviews</div>

        <div class="container shadow-sm rounded mt-2 mb-3" v-for="item in 4" :key="item">
            <div class="row">
                <div class="col lorem pt-1"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eleifend facilisis mollis. </p></div>
            </div>
            <div class="row review pb-2">
                <div class="col review-by">James Bond</div>
                <div class="col time">2 days ago</div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return {
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
}
</script>

<style lang="scss" scoped>
.container{
    background-color: white;

    .order-img{
        height: 125px;
        width: 125px;
    }

    .my-col{
        width: 125px;
        height: 60px;
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
                // display: inlin;
                justify-content: center;
                color: black;

                .icon-green{
                    color: green;
                }
            }

    .merch{
        color: black;
        font-size: 1rem;
    }

    .intl-ship{
        justify-content: center;
        font-size: 0.78rem;
        color: black;

        .int{
            position: absolute;
            top: 9px;
        }

        .mdi::before{
            // font-size: 9px;
            display:inline-block;
    -webkit-transform: rotate(45deg); 
    // -moz-transform: rotate(-90deg); 
        }
    }

    .comp-del{
        font-size: 0.6rem;
        justify-content: center;
    }
}

.rev-title{
        font-size: 1.03rem;
        color: black;
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

        // .button-div{
        //     margin-left: 0.2px;
        //     margin-right: 0.2px;
        // }

</style>
