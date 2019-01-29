<template>
    <div>
        <div class="container1 mb-3 ml-3">
            <div class="row mb-1"><img :src="orderImage" class="rounded" alt="" width="98px" height="95px"></div>
            <div class="row merch mt-1">
                <div class="col merch-name">{{ merchantName }}</div>
                <div class="col intl-shipping" v-if="shipping == 'intl'">
                    <i class="mdi mdi-airplane"></i>
                </div>
            </div>
            <div class="row rating">
                <i class="mdi mdi-star icon-blue"></i> &nbsp;
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
    font-size: 0.65rem;
    color: black;

    .merch-name{
        padding-left: 0px;
    }
}

.rating{
    color: black;
    font-size: 0.58rem;

    .mdi::before{
        color: blue;
        font-size: 0.65rem;
        position: relative;
        top: -3.5px;
    }
}

.intl-shipping{
    .mdi::before{
        color: blue;
        position: relative;
        left: -90px;
        top: 1px;
        font-size: 0.7rem;
        display:inline-block;
        -webkit-transform: rotate(45deg);
    }
}
</style>


