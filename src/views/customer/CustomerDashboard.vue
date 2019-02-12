<template>
    <div>
        <div class="row p-4" >
            <div class="col-12 col-lg-2 col-md-3">
                <div>
                    <button type="submit" class="btn btn-div py-3 mb-4 btn-primary btn-block active" @click="gotoNewOrder">Book a new Delivery</button>
                </div>
            </div>
        </div>

        <div class="row mb-3 px-4">
            <div class="col-8">
                <div class="black bold">Recent Orders</div>
            </div>
            <div class="col-4">
                <div class="text-right">
                    <button type="submit" class="btn py-1 btn-small btn-primary active" @click="gotoAllOrders">VIEW ALL</button>
                </div>
            </div>
        </div>

        <div class="row scrolling-wrapper-flexbox">
            <div class="col-6 col-lg-2 col-md-3 ml-2" v-for="order in orders" :key="order.id">
                <div class="row ml-2 rounded order-card mb-3 shadow-sm pb-3 pt-2">
                    <div class="col-12">
                        <div class="row align-items-center">
                            <div class="col">
                                <div class="order-id">{{ dummy.id }}</div>
                            </div>
                            <div class="col">
                                <div class="order-date text-right"> {{ dummy.date }}</div>
                            </div>
                        </div>
                        <div class="row my-1 align-items-center">
                            <div class="col-2">
                                 <div class="order-img merch-image rounded" :style="{'background-image': 'url('+dummy.image+')'}"></div>
                            </div>
                            <div class="col">
                                <div class="row">
                                    <div class="col">
                                        <div class="order-merch black ml-2">{{ dummy.merchantName }}</div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col">
                                        <div class="status black ml-2">
                                                Order Status: &nbsp;
                                                <div class="delivery-status px-1" v-if="order.status == 'success'">
                                                    Delivered
                                                </div>
                                                <div class="delivery-status status-red px-2" v-if="order.status == 'fail'">
                                                    Cancelled
                                                </div>
                                                <div class="delivery-status status-orange px-2" v-if="order.status == 'pending'">
                                                    Pending
                                                </div>
                                        </div>
                                    </div>
                                </div>                    
                            </div>
                        </div> <hr>
                        <div class="col pt-2 mb-5">
                            <div class="row description">Description</div>
                            <div class="row description__content">{{ order.item_description }}</div>
                        </div>
                        <button type="submit" class="btn btn-block detail-btn py-1 btn-primary active">View Details</button>
                    </div>
                </div>      
            </div>
        </div>    

        <div class="row my-3 px-4">
            <div class="col-8">
                <div class="black bold">
                    Favourite Merchants
                </div>
            </div>
            <div class="col-4">
                <div class="text-right">
                    <button type="submit" class="btn py-1 btn-small btn-primary active" @click="gotoAllMerchants">VIEW ALL</button>
                </div>
            </div>
        </div>

        <div class="row scrolling-wrapper-flexbox pl-4">
            <div class="col-4 col-md-2" v-for="merchant in merchants" :key="merchant.id">
                <div class="">
                    <merchant-card :orderImage="dummy.image"
                            :merchantName="merchant.company_name"
                            :orderRating="dummy.rating"/>
                </div>
            </div>
        </div>

        <div class="row my-4 px-4">
            <div class="col-8">
                <div class="black bold">Favourite Contacts</div>
            </div>
            <div class="col-4">
                <div class="text-right">
                     <button type="submit" class="btn py-1 btn-small btn-primary active" @click="gotoNewContact">ADD NEW</button>
                </div>
            </div>
        </div>

        <div class="row wrap px-4 mb-2">
            <div class="col-12 col-md-6 col-lg-3" v-for="contact in contacts" :key="contact.id">
                <contact-card :contactName="contact.name"
                                :contactNumber="contact.number"
                                :contactImage="image"/>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import ContactCard from './../../components/customer/ContactCard';
import MerchantCard from './../../components/customer/MerchantCard';
export default {
    components: {
        ContactCard,
        MerchantCard,
    },
    data() {
        return {
            dummy: {
                id: 'ORD123',
                merchantName: 'Reftek',
                status: 'success',
                date: '3 days ago',
                rating: 4.72,
                image: 'https://trademe.tmcdn.co.nz/photoserver/plus/687646665.jpg',
            },
            orders: [],
            contacts: [],
            merchants: [],
            image: "https://www.beweship.com/wp-content/uploads/2017/04/beweship-contact-placeholder.jpg",
        }
    },
    methods: {
        gotoAllMerchants(){
            return this.$router.push({ name: 'merchant.all' });
        },
        gotoNewContact(){
            this.$router.push({name: "customers.contacts.new"});
        },
        gotoNewOrder(){
            this.$router.push({name: "customers.orders.new"});
        },
        gotoAllOrders(){
            this.$router.push({ name: "customers.orders"});
        }
    },
    mounted(){
        let token = window.localStorage.getItem('dvlmp-token');
        if(token){
        axios.defaults.headers.common['Authorization'] = "Bearer "+token;
        }

        axios.get('http://127.0.0.1:8000/api/contact')
            .then(response => {
                let result = response.data;

                if(result.status === true) {
                    window.localStorage.setItem('dvlmp-contacts', JSON.stringify(result.data));
                    let contacts = JSON.parse(window.localStorage.getItem('dvlmp-contacts'));
                    console.log(contacts);

                    this.contacts =contacts;
                    console.log(this.contacts);

                }
            })

        axios.get('http://127.0.0.1:8000/api/merchant')
            .then(response => {
                let result = response.data;

                if(result.status == true){
                    window.localStorage.setItem('dvlmp-merchants', JSON.stringify(result.data));
                    let merchants = JSON.parse(window.localStorage.getItem('dvlmp-merchants'));
                    console.log(merchants)

                    this.merchants = merchants;
                }
            })

        axios.get('http://127.0.0.1:8000/api/orders')
            .then(response => {
                let result = response.data;

                if(result.status == true){
                    window.localStorage.setItem('dvlmp-orders', JSON.stringify(result.data));
                    let orders = JSON.parse(window.localStorage.getItem('dvlmp-orders'));
                    console.log(orders)

                    this.orders = orders;
                }
            })
    },
}
</script>

<style lang="scss" scoped>
.scrolling-wrapper-flexbox {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  flex: 0 0 auto;
}

.order-card{
    min-width: 195px;
    min-height: 146px;
    background-color: white;
    
    .order-id{
        font-size: 0.6rem;
        color: black;
    }

    .order-date{
        font-size: 0.5rem;
   }

   .order-merch{
       font-size: 0.65rem;
   }

   .status{
       font-size: 0.6rem;
       display: inline-block;
   }

   .description{
        font-size: 0.6rem;

        &__content{
            font-size: 0.55rem;
        }
    }

    .detail-btn{
        font-size: 0.6rem;
        position: relative;
        display: inline-block;
    }

}

.btn-small{
    font-size: 0.5rem;
}

.order-img{
    height: 35px !important;
    width: 36px !important;
    background-size: cover;
    background-repeat: no-repeat;
}

.delivery-status{
    background-color: #48C23A;
    color: white;
    font-size: 0.5rem;
    display: inline-block;
    border-radius: 2px;

    &.status-red{
        background-color: red;
    }

    &.status-orange{
        background-color: orange;
    }
}

.black{
    color: black;
}

.bold{
    font-weight: bold;
}

hr{
    margin-top: 0.5rem;
    margin-bottom: 0rem;
    position: relative;
}

.btn-div{
    font-size: 0.8rem;
}
</style>