<template>
    <div class="p-4">
        <p>Merchants</p>

        <div class="btn-group btn-group-justified mb-4" role="group" aria-label="Justified button group">
            <a class="btn btn-light border" href="#" role="button">All</a>
            <a class="btn btn-light border" href="#" role="button">Local</a>
            <a class="btn btn-light border" href="#" role="button">International</a>
        </div>

        <div class="row wrap">
            <div class="col-4 col-md-2 pb-4" v-for="merchant in merchants" :key="merchant.id">
                <merchant-card :orderImage="merchantdummy.image"
                                :merchantName="merchant.company_name"
                                :orderRating="merchantdummy.rating"
                                :shipping="merchantdummy.shipping"/>
            </div>
        </div>

    </div>
</template>

<script>
import MerchantCard from "./../../components/customer/MerchantCard.vue";
import axios from 'axios';

export default {
    components: {
        MerchantCard
    },
    methods: {

    },
    data() {
        return {
            merchantdummy: {
                id: "ORD123",
                name: 'Reftek',
                shipping: 'intl',
                rating: 4.72,
                image: 'https://trademe.tmcdn.co.nz/photoserver/plus/687646665.jpg',
            },
        }
    },
    computed: {
        merchants() {
            return this.$store.getters.getMerchants;
        },
    },
    mounted() {
        this.$store.dispatch('retrieveMerchants');
    }
}
</script>

<style lang="scss" scoped>
p{
    color: black;
    font-weight: bold;
    font-size: 1.5rem;
}

.btn-group{
    .btn{
        font-size: 0.8rem;
        background-color: white;
    }
}

.btn-group-justified {
    display: table;
    width: 100%;
    table-layout: fixed;
    border-collapse: separate; 
}

.btn-group-justified .btn,
.btn-group-justified .btn-group {
    float: none;
    display: table-cell;
    width: 1%; 
}

.btn-group-justified .btn .btn,
.btn-group-justified .btn-group .btn {
    width: 100%; 
}

.btn-group-justified .btn .dropdown-menu,
.btn-group-justified .btn-group .dropdown-menu {
    left: auto; 
}
</style>

