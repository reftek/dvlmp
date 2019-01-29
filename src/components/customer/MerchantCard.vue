<template>
    <div class="mb-3">
        <div class="row">
            <div class="col-11 order-img merch-image rounded" :style="{'background-image': 'url('+orderImage+')'}">
            </div>
        </div>
        <div class="row merch mt-1">
            <div class="col pl-0">{{ merchantName }}</div>
            <div class="col text-right" v-if="shipping == 'intl'">
                <div class="intl-shipping">
                    <i class="mdi mdi-airplane"></i>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col rating pl-0">
                <i class="mdi mdi-star icon-blue"></i>
                {{ orderRating }}
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
    height: 98px;
    // width: 90%;
}

.order-image{
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
        top: -6px;
        right: 3px;
    }
}
</style>


