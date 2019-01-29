<template>
    <div>
        <p>Merchants</p>

        <div class="btn-group btn-group-justified mb-4" role="group" aria-label="Justified button group">
            <a class="btn btn-light border" href="#" role="button">All</a>
            <a class="btn btn-light border" href="#" role="button">Local</a>
            <a class="btn btn-light border" href="#" role="button">International</a>
        </div>

        <div class="row wrap">
            <div class="col-4" v-for="item in 9" :key="item">
                <merchant-card :orderImage="merchant.image"
                                :merchantName="merchant.name"
                                :orderRating="merchant.rating"
                                :shipping="merchant.shipping"/>
            </div>
        </div>

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
            merchant: {
                id: "ORD123",
                name: 'Reftek',
                shipping: 'intl',
                rating: 4.72,
                image: 'https://trademe.tmcdn.co.nz/photoserver/plus/687646665.jpg',
            },
            merchant2: {
                id: "ORD123",
                name: 'GEMS',
                shipping: 'intl',
                rating: 3.72,
                image: 'https://placehold.it/300x100',
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

.btn-group{
    .btn{
        font-size: 0.8rem;
        background-color: white;
    }
}
// .my-nav{
//     border: 0.5px solid rgb(212, 210, 210);
//     color: black;
//     // height: 30px;
//     margin-left: 0px;
//     font-size: 0.7rem;
//     background-color: white;

//     .loc{
//         border-right: 0.8px solid rgb(226, 226, 226);
//         border-left: 0.8px solid rgb(226, 226, 226);
//     }

//     .col{
//         // width: 100%;
//         height: 28.5px;
//     }

//     .col:hover{
//         background-color: #C4C4C4;
//     }
// }
.btn-group-justified {
  display: table;
  width: 100%;
  table-layout: fixed;
  border-collapse: separate; }
  .btn-group-justified .btn,
  .btn-group-justified .btn-group {
    float: none;
    display: table-cell;
    width: 1%; }
    .btn-group-justified .btn .btn,
    .btn-group-justified .btn-group .btn {
      width: 100%; }
    .btn-group-justified .btn .dropdown-menu,
    .btn-group-justified .btn-group .dropdown-menu {
      left: auto; }
</style>

