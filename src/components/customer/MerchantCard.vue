<template>
    <div>
        <div class="row">
            <div class="col-11"> 
                <div class="order-img merch-image rounded" :style="{'background-image': 'url('+orderImage+')'}"></div>
            </div>
        </div>
        <div class="row">
            <div class="col-8">
                <div class="merch mt-1">
                    {{ merchantName }}
                </div>
            </div>
            <div class="col-4">
                <div class="intl-shipping text-right mr-3"  v-if="shipping == 'intl'">
                    <i class="mdi mdi-airplane"></i>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="rating">
                    <i class="mdi mdi-star icon-blue"></i>
                    {{ orderRating }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'orderImage',
        'merchantName',
        'orderRating',
        'shipping',
    ]
}
</script>

<style lang="scss" scoped>
.merch{
    font-size: 0.7rem;
    color: black;
}

.merch-image{
    min-height: 98px;
    min-width: 100px;
}

.order-img{
  background-position: center, center;
  background-repeat: no-repeat;
  background-size: cover;  
}

.rating{
    color: black;
    font-size: 0.6rem;

    .mdi::before{
        color: blue;
        font-size: 0.8rem;
        position: relative;
        top: -2.5px;
    }
}

.intl-shipping{
    transform: rotate(45deg);
    .mdi::before{
        font-size: 0.8rem;
        color: white;
        background-color: blue;
        border-radius: 50%;
        position: relative;
        top: -10px;
    }
}
</style>


