<template>
    <div>
        <div class="row align-items-center">
            <div class="col-12 col-md-6">
                
                <div class="row order-details shadow-sm py-3 mx-0 mt-4 mb-2 rounded align-items-center">
                    <div class="col-2 col-md-1">
                        <div class="order-img rounded" :style="{'background-image': 'url('+image+')'}"></div>
                    </div>
                    <div class="col ml-2">
                        <div class="bold-title order-merch text-capitalize">
                            {{ merchant.company_name }}
                        </div>
                        <div class="rating order-merch">
                            <i class="mdi star-icon mdi-star small icon-blue"></i> 
                            {{ rating }}
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-6">
                            <select class="form-control mb-3" v-model="isSelectedMerchant" required>
                                <option disabled value>Select Merchant</option>
                                <option v-for="merchant in merchants" :key="merchant.id" class="text-capitalize">{{ merchant.company_name }}</option>
                            </select>                    
                    </div>
                </div>
                
                <div class="main-container shadow-sm rounded mb-3">
                    <div class="ml-2 title-form pt-2">PICKUP INFO</div>
                    <div class="row justify-content-center p-2 mb-3">
                        <div class="col-12 col-lg-6">
                            <input type="" v-model="itemDescription" class="form-control mb-2" placeholder="Item Description" required>
                        </div>
                        <div class="col-12 col-lg-6">
                            <select class="form-control mb-2" v-model="itemCategory" required>
                                <option disabled value>Item Category</option>
                                <option>Fragile</option>
                                <option>Consumable/Foods</option>
                                <option>Electronics</option>
                                <option>Silverware</option>
                            </select>                            
                        </div>
                        <div class="col-12 col-lg-6">
                            <select class="form-control mb-2" v-model="itemWeightClass" required>
                                <option disabled value>Item Weight Class</option>
                                <option>5-10 Tons</option>
                                <option>11-20 Tons</option>
                                <option>21-30 Tons</option>
                                <option>31-40 Tons</option>
                            </select>
                        </div>
                        <div class="col-12 col-lg-6">
                            <select class="form-control mb-2" v-model="pickupContact" required>
                                <option disabled value>Pickup Contact</option>
                                <option v-for="contact in contacts" :key="contact.id">{{ contact.name }}</option>
                            </select>
                        </div>
                        <div class="col-12 col-lg-6">
                            <input type="" v-model="pickupAddress" class="form-control mb-2" placeholder="Pickup Address" required>
                        </div>
                        <div class="col-12 col-lg-6">
                            <select class="form-control mb-2" v-model="pickupCity" required>
                                <option disabled value>Pickup City/Town</option>
                                <option>Ikeja</option>
                                <option>Festac</option>
                                <option>Ikoyi</option>
                                <option>Gbagada</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="main-container shadow-sm rounded pb-1 mb-3">
                    <div class="ml-2 title-form pt-2">DELIVERY INFO</div>
                    <div class="row justify-content-center p-2 mb-3">
                        <div class="col-12 col-lg-6">
                            <select class="form-control mb-2" v-model="deliveryContact" required>
                                <option disabled value>Delivery Contact</option>
                                <option v-for="contact in contacts" :key="contact.id">{{ contact.name }}</option>
                            </select>
                        </div>
                        <div class="col-12 col-lg-12">
                            <input type="email" class="form-control mb-2" v-model="deliveryAddress" placeholder="Delivery Address" required>
                        </div>
                        <div class="col-12 col-lg-6">
                            <select class="form-control mb-2" v-model="country" required>
                                <option disabled value>Country</option>
                                <option>Nigeria</option>
                                <option>Sweden</option>
                            </select>
                        </div>
                        <div class="col-12 col-lg-6">
                            <select class="form-control mb-2" v-model="deliveryCity" required>
                                <option disabled value>Delivery City/Town</option>
                                <option>Ikeja</option>
                                <option>Festac</option>
                                <option>Ikoyi</option>
                                <option>Gbagada</option>
                            </select>
                        </div>
                        <div class="col-12 col-lg-12">
                            <textarea class="form-control" v-model="deliveryNotes" rows="5" placeholder="Delivery Notes"></textarea>
                        </div>
                    </div>
                </div>

            </div>
            <div class="col-md-6 d-none d-md-block">
                <div class="text-center">
                    <img src="./../../assets/images/delivery_woman.svg" class="w-75" />
                </div>
            </div>
        </div>
    
        <div class="row mt-3">
            <div class="col-12 col-md-4 col-lg-4">
                <button type="submit" class="btn py-3 btn-primary btn-block active" @click="bookDelivery">Book a new delivery</button>
            </div>
        </div>

</div>
</template>

<script>
import axios from 'axios';

export default {
    props: [
        'orderId',
        'merchantName',
        'status',
        'orderDescription',
        'orderDate',
        'image',
        'rating',
    ],
    data() {
        return {
            itemDescription: '',
            itemCategory: '',
            itemWeightClass: '',
            pickupContact: '',
            pickupAddress: '',
            pickupCity: '',
            deliveryContact: '',
            deliveryAddress: '',
            country: '',
            deliveryCity: '',
            deliveryNotes: '',
            merchantId: '',
            merchant: {},
            merchants: [],
            contacts: [],   
            isSelectedMerchant: '',         
        }
    },
    methods: {
        bookDelivery() {
            var body = {
                item_description: this.itemDescription,
                item_category: this.itemCategory,
                item_weight_class: this.itemWeightClass,
                pickup_contact: this.pickupContact,
                pickup_address: this.pickupAddress,
                pickup_city: this.pickupCity,
                delivery_contact: this.deliveryContact,
                delivery_address: this.deliveryAddress,
                country: this.country,
                delivery_city: this.deliveryCity,
                delivery_notes: this.deliveryNotes,
                merchant_id: this.merchantId
            }

            axios.post('http://127.0.0.1:8000/api/delivery', body)
                .then(response => {
                    let result = response.data;

                    if(result.status == true) {
                        console.log('new order made');
                        console.log(result.data);

                        this.$router.push({ name: 'customers.orders'});
                    }
                })
        }
    },
    mounted() {
        let merchants = JSON.parse(window.localStorage.getItem('dvlmp-merchants'));
        this.merchants = merchants;

        let contacts = JSON.parse(window.localStorage.getItem('dvlmp-contacts'));
        this.contacts = contacts;
    },
    watch: {
        isSelectedMerchant() {

            let selectedMerchant = this.merchants.filter(a => a.company_name == this.isSelectedMerchant);
            
            this.merchant = selectedMerchant[0];
            console.log(this.merchant);
        },
    }

}
</script>


<style lang="scss" scoped>
    .order-img{
        height: 50px;
        width: 55px;
        background-position: center, center;
        background-size: cover;
        background-repeat: no-repeat;
    }

    .bold-title{
        font-weight: 600;
        font-size: 0.8rem;
    }

    .order-merch{
        color: black;

        &.rating{
            font-size: 0.75rem;
            
            .icon-blue{
                color: blue;
            }
        }
    }

    .order-details{
        background-color: white;
    }

    .title-form{
        font-size: 0.68rem;
        font-weight: bold;
        color: blue;
    }

    .form{
        padding-left: 12px;
        padding-right: 12px;
    }

    .mdi::before{
        font-size: 15px;
        position:relative;
        top:-2.5px;
    }

    input{
        font-size: 0.75rem;
    }

    select{
        font-size: 0.75rem;
    }

    textarea{
        font-size: 0.75rem;
    }

    button{
        font-size: 0.8rem;
    }

    .main-container{
        background-color: white;
    }

</style>



