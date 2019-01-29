<template>
    <div>
        <p>Merchants</p>

        <div class="container my-nav rounded mb-3 align-items-center">
            <div class="row">
                <div class="col text-center rounded-left pt-1">All</div>
                <div class="col text-center loc pt-1">Local</div>
                <div class="col text-center rounded-right pt-1">International</div>
            </div>
        </div>

        <merchant-card :orderImage="merchant.image"
                        :merchantName="merchant.name"
                        :orderRating="merchant.rating"
                        :shipping="merchant.shipping"/>
    </div>
</template>

<script>
import MerchantCard from "./../../components/customer/MerchantCard.vue";
export default {
    components: {
        MerchantCard
    },
    methods: {

    },
    data() {
        return {
            merchant:
                {
                    id: "ORD123",
                    name: 'Reftek',
                    shipping: 'intl',
                    rating: 4.72,
                    image: 'https://trademe.tmcdn.co.nz/photoserver/plus/687646665.jpg',
                },
        }
    },
}
</script>

<style lang="scss" scoped>
p{
    color: black;
    font-weight: bold;
    font-size: 1.5rem;
}

.my-nav{
    border: 0.5px solid rgb(212, 210, 210);
    color: black;
    width: 345px;
    height: 30px;
    margin-left: 0px;
    font-size: 0.7rem;
    background-color: white;

    .loc{
        border-right: 0.8px solid rgb(226, 226, 226);
        border-left: 0.8px solid rgb(226, 226, 226);
    }

    .col{
        // width: 100%;
        height: 28.5px;
    }

    .col:hover{
        background-color: #C4C4C4;
    }
}
</style>

