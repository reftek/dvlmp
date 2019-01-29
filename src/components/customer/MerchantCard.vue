<template>
    <div class="mb-3">
        <div class="row mb-1">
            <div class="col-12">
                <img :src="orderImage" class="rounded w-100" style="height: 80px">
            </div>
        </div>
        <div class="row merch mt-1">
            <div class="col">{{ merchantName }}</div>
            <div class="col text-right" v-if="shipping == 'intl'">
                <div class="intl-shipping">
                    <i class="mdi mdi-airplane"></i>
                </div>
            </div>
        </div>
        <div class="row rating">
            <div class="col">
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
    font-size: 0.7rem;
    color: black;
}

.rating{
    color: black;
    font-size: 0.6rem;

    .mdi::before{
        color: blue;
        font-size: 0.68rem;
        position: relative;
        top: -3.5px;
    }
}
.intl-shipping{
    transform: rotate(45deg);
    .mdi::before{
        font-size: 0.8rem;
    }
}

// .intl-shipping{
//     .mdi::before{
//         color: blue;
//         position: relative;
//         left: -90px;
//         top: 1px;
//         font-size: 0.7rem;
//         display:inline-block;
//         -webkit-transform: rotate(45deg);
//     }
// }
</style>


